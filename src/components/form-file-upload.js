import { LitElement, html, css } from "lit";
import { theme } from "../theme.js";
import { FileUploadFormManager } from "../FileUploadFormManager.js";

class FormFileUpload extends LitElement {
  static styles = css`
    ${theme.utility.font}

    :host {
      display: block;
      width: 277px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .fields {
      display: flex;
      flex-direction: column;
    }

    .gap {
      margin-bottom: 10px;
    }
  `;

  static properties = {
    formManager: { type: Object },
    leaving: { type: Boolean },
    _nameFieldAnimationEnabled: { type: Boolean, state: true },
  };

  constructor() {
    super();

    this.formManager = new FileUploadFormManager();
    this.leaving = false;
    this._nameFieldAnimationEnabled = false;
  }

  firstUpdated() {
    this._nameFieldAnimationEnabled = true;
  }

  handleFileSelected(e) {
    this.formManager.file = e.detail.file;
    this.requestUpdate();
  }

  handleNameChanged(e) {
    this.formManager.name = e.detail.value;
    this.requestUpdate();
  }

  handleFileLoaded() {
    this.formManager.fileLoaded = true;
    this.requestUpdate();
  }

  handleSubmit() {
    const submitPromise = this.formManager.submit().finally(() => {
      this.requestUpdate(); // после загузки файла
    });

    this.requestUpdate(); // перед загузкой файла

    this.dispatchSubmit(submitPromise);
  }

  dispatchSubmit(submitPromise) {
    const submitEvent = new CustomEvent("submit", {
      detail: { submitPromise }, // чтобы можно было отследить завершение загрузки даже если элемент удален
    });
    this.dispatchEvent(submitEvent);
  }

  get hint() {
    if (!this.formManager.isNameValid) {
      return "Перед загрузкой дайте имя файлу";
    }

    if (this.formManager.isSubmitting) {
      return "Файл загружается на сервер";
    }

    if (!this.formManager.isSubmitDisabled) {
      return "Загрузите ваш файл";
    }

    return "Перенесите ваш файл в область ниже";
  }

  render() {
    return html`
      <form>
        <upload-header ?leaving=${this.leaving}>
          <span slot="title">Загрузочное окно</span>

          <span slot="hint">${this.hint}</span>
        </upload-header>

        <!-- объедиены для присоединения промежутка к анимации текстового поля -->
        <div class="fields">
          <in-out-animated
            .shown=${!this.formManager.isFileFilled}
            .animationEnabled=${this._nameFieldAnimationEnabled}
          >
            <text-field
              class="gap"
              @value-changed=${this.handleNameChanged}
              .value=${this.formManager.name}
            ></text-field>
          </in-out-animated>

          <file-field
            @file-selected=${this.handleFileSelected}
            @file-loaded=${this.handleFileLoaded}
            ?disabled=${this.formManager.isFileFieldDisabled}
            ?loading=${this.formManager.isSubmitting}
            ?decreasing=${this.leaving}
          ></file-field>
        </div>

        <submit-button
          @click=${this.handleSubmit}
          ?disabled=${this.formManager.isSubmitDisabled}
          .decreasing=${this.leaving}
        ></submit-button>
      </form>
    `;
  }
}

customElements.define("form-file-upload", FormFileUpload);

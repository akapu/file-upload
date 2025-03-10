// Аннотируем офсетами кейфреймы, вычисляем общую длительность
export class FormResultToggleAnimationFrames {
  static StageDurations = [0, 220, 200, 90, 200];

  constructor(keyframesWithStages) {
    for (const { keyframe, stage } of keyframesWithStages) {
      this.setKeyframe(stage, keyframe);
    }
  }

  _keyframeStageMap = Array(
    FormResultToggleAnimationFrames.StageDurations.length
  );

  setKeyframe(stage, keyframe) {
    this._keyframeStageMap[stage] = keyframe;
  }

  get _firstKeyframeIndex() {
    return this._keyframeStageMap.findIndex((keyframe) => keyframe);
  }

  get _lastKeyframeIndex() {
    return this._keyframeStageMap.findLastIndex((keyframe) => keyframe);
  }

  get _usedDurations() {
    return FormResultToggleAnimationFrames.StageDurations.slice(
      this._firstKeyframeIndex,
      this._lastKeyframeIndex + 1
    );
  }

  get totalDuration() {
    return this._usedDurations.reduce(
      (sum, stageDuration) => sum + stageDuration,
      0
    );
  }

  get _offsets() {
    let currentDuration = 0;
    const offsets = [];

    for (const duration of this._usedDurations) {
      currentDuration += duration;

      offsets.push(currentDuration / this.totalDuration);
    }

    return offsets;
  }

  get _usedKeyframes() {
    return this._keyframeStageMap.slice(
      this._firstKeyframeIndex,
      this._lastKeyframeIndex + 1
    );
  }

  get keyframesWithOffsets() {
    return this._usedKeyframes.map((keyframe, i) => ({
      ...keyframe,
      offset: this._offsets[i],
    }));
  }
}

// Аннотируем офсетами кейфреймы, вычисляем общую длительность
export class KeyframesComposer {
  constructor(stageDurations) {
    this._stageDurations = stageDurations;
    this._keyframeStageMap = Array(this._stageDurations.length);
  }

  setKeyframe(stage, keyframe) {
    this._keyframeStageMap[stage] = keyframe;
  }

  setKeyframes(keyframesWithStages) {
    for (const { keyframe, stage } of keyframesWithStages) {
      this.setKeyframe(stage, keyframe);
    }
  }

  get _firstKeyframeIndex() {
    return this._keyframeStageMap.findIndex((keyframe) => keyframe);
  }

  get _lastKeyframeIndex() {
    return this._keyframeStageMap.findLastIndex((keyframe) => keyframe);
  }

  get _usedDurations() {
    return this._stageDurations.slice(
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

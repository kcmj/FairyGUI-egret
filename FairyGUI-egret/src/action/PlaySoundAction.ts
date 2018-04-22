module fairygui {

    export class PlaySoundAction extends ControllerAction {
        private _sound: egret.Sound;
        private _soundChannel: egret.SoundChannel;

        constructor(soundRes:string) {
            super();
            RES.getResAsync(soundRes).then(sound => {
                this._sound = sound;
            }).catch(e => {

            });
        }

        protected enter(controller: Controller): void {
            if (this._soundChannel) {
                this._soundChannel.stop();
            }
            if (this._sound) {
                this._soundChannel = this._sound.play(0, 1);
            }
        }
    }

}
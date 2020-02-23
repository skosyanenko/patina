import anime from 'animejs';

export default class TextFx {
    constructor(el, effect) {
        this.el = el;
        this.effect = effect;
        this._init();
    }

    _init = () => {
        window.charming(this.el, {classPrefix: 'letter'});
        this.letters = [].slice.call(this.el.querySelectorAll('span'));
    };

    _stop = () => {
        anime.remove(this.letters);
        this.letters.forEach(function (letter) {
            letter.style.WebkitTransform = letter.style.transform = '';
        });
    };

    show = (effect = this.effect, callback) => {
        this._stop();
        effect ? this._animate('in', effect, callback) : this.letters.forEach(function (letter) {
            letter.style.opacity = 1;
        });
    };

    hide = (effect, callback) => {
        this._stop();
        effect ? this._animate('out', effect, callback) : this.letters.forEach(function (letter) {
            letter.style.opacity = 0;
        });
    };

    _animate = (direction, effect, callback) => {
        const effectSettings = typeof effect === 'string' ? this.effect : effect;

        this.el.style.WebkitPerspective = this.el.style.perspective = effectSettings.perspective + 'px';

        this.letters.forEach(function (letter) {
            letter.style.WebkitTransformOrigin = letter.style.transformOrigin = effectSettings.origin;
        });

        const animOpts = effectSettings[direction],
          target = this.letters;

        target.forEach(function (t, p) {
            if (t.innerHTML === ' ') {
                target.splice(p, 1);
            }
        });

        animOpts.targets = target;

        animOpts.complete = callback;

        anime(animOpts);
    };
};

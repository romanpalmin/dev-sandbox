/**
 * Created by Roman on 20.10.2015.
 */
function TabButtons(id, data, isDebug) {

    this.isDebug = isDebug;
    this.data = data;
    if (!this.data) {
        //  нет данных для формирования табменю
        return;
    }
    this.data.id = id;
    this.default = this.data.default ? this.data.default : this.data.menuItems[0].name;
    this._value = this.default;
    this.element = document.getElementById(id);
    var self = this;
    if (!this.data) {
        //  нет данных для формирования табменю
        return;
    }
    dust.render('tabButtons.dust', this.data, function (err, out) {
        self.element.innerHTML = out;
        var _currectClass = 'tab-buttons_btn-'+self.data.id;
        var elems = document.getElementsByClassName(_currectClass);

        //  будем перебирать как массив
        [].forEach.call(elems, function(item) {
            if (item.getAttribute('name') ===  self.default){
                item.classList.add('active');
            }
            item.addEventListener('click', function ToggleActiveClass() {
                var current = document.getElementsByClassName(_currectClass + ' active');
                if (current.length === 1) {
                    current[0].classList.remove('active');
                }
                this.classList.add('active');
                self.setValue(this.getAttribute('name'));
            }, false);
        });
    });
}

TabButtons.prototype = {
    setValue: function (val) {
        this._value = val;
    },
    getValue: function () {
        return this.data ? this._value : (this.isDebug ? 'Отсутствуют данные для формирования табменю' : '');
    }
};

TabButtons.prototype.Render = function () {

};
module.exports = TabButtons;







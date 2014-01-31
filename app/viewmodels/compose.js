define(['knockout'], function (ko) {
    return {
        composed: ko.observable(),
        activate: function () {
            // takes a long time to activate
            var self = this;

            self.composed(null);  // does not remove "slow", because value is already null
            // self.composed.valueHasMutated();  // "fix"

            // first show "fast"
            setTimeout(function() {
                self.composed('viewmodels/fast');
            }, 1000);

            // then start loading "slow"
            setTimeout(function() {
                self.composed('viewmodels/slow');
            }, 2000);

            // then clear, doesn't prevent "slow" from appearing later
            setTimeout(function() {
                self.composed(null);
            }, 3000);
        }
    };
});

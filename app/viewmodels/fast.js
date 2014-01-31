define(['durandal/system'], function (system) {
    return {
        displayName: 'Fast',
        activate: function () {
            // takes a long time to activate
            return system.defer(function(dfd) {
                setTimeout(function() {
                    dfd.resolve();
                }, 10);
            });
        }
    };
});

define(['durandal/system'], function (system) {
    return {
        displayName: 'Slow',
        activate: function () {
            // takes a long time to activate
            return system.defer(function(dfd) {
                setTimeout(function() {
                    dfd.resolve();
                }, 5000);
            });
        }
    };
});

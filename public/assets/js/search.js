(function() {
    $(".search-display").slideToggle('fast');

    Array.from( $(".nav-tabs a") ).map((val) => {
        let el = `#${val.id}-display`;
        $(this).click(() => console.log("Hi"));
    })
})()


function BindTel() {

    var inputTel = document.querySelector("#telField");
    hdnCountryCode = document.getElementById("hdnCountryCode");
    if (hdnCountryCode != null) {
        hdnCountryCode.value = "";
    }
    hdnCountryName = document.getElementById("hdnCountryName");
    if (hdnCountryName != null) {
        hdnCountryName.value = "";
    }
    hdnCountryCode2 = document.getElementById("hdnCountryCode2");
    if (hdnCountryCode2 != null) {
        hdnCountryCode2.value = "";
    }
    hdnCountryName2 = document.getElementById("hdnCountryName2");
    if (hdnCountryName2 != null) {
        hdnCountryName2.value = "";
    }
    hdnCountryCode3 = document.getElementById("hdnCountryCode3");
    if (hdnCountryCode3 != null) {
        hdnCountryCode3.value = "";
    }
    hdnCountryName3 = document.getElementById("hdnCountryName3");
    if (hdnCountryName3 != null) {
        hdnCountryName3.value = "";
    }
    if (inputTel) {
        window.intlTelInput(inputTel, {
            initialCountry: "auto",
            geoIpLookup: function (callback) {
                $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);

                    var countryData = window.intlTelInputGlobals.getCountryData(),
                        input = document.querySelector("#telField");
                    for (var i = 0; i < countryData.length; i++) {
                        var country = countryData[i];
                        if (countryCode.toLowerCase() == country.iso2) { // iso2 = PK

                            hdnCountryName = document.getElementById("hdnCountryName");
                            if (hdnCountryName != null) {
                                hdnCountryName.value = country.name;// name = Pakistan
                            }
                            hdnCountryName2 = document.getElementById("hdnCountryName2");
                            if (hdnCountryName2 != null) {
                                hdnCountryName2.value = country.name;// name = Pakistan
                            }
                            hdnCountryName3 = document.getElementById("hdnCountryName3");
                            if (hdnCountryName3 != null) {
                                hdnCountryName3.value = country.name;// name = Pakistan
                            }
                            hdnCountryCode = document.getElementById("hdnCountryCode");
                            if (hdnCountryCode != null) {
                                hdnCountryCode.value = country.dialCode;// dialCode = 92
                            }
                            hdnCountryCode2 = document.getElementById("hdnCountryCode2");
                            if (hdnCountryCode2 != null) {
                                hdnCountryCode2.value = country.dialCode;// dialCode = 92
                            }
                            hdnCountryCode3 = document.getElementById("hdnCountryCode3");
                            if (hdnCountryCode3 != null) {
                                hdnCountryCode3.value = country.dialCode;// dialCode = 92
                            }
                            break;
                        }
                    }
                });
            }


        });
    }


    var inputTel = document.querySelector("#telField2");
    if (inputTel) {
        window.intlTelInput(inputTel, {
            initialCountry: "auto",
            geoIpLookup: function (callback) {
                $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                    var countryData = window.intlTelInputGlobals.getCountryData(),
                        input = document.querySelector("#telField2");

                });
            }


        });

    }

    var inputTel = document.querySelector("#telField3");
    if (inputTel) {
        window.intlTelInput(inputTel, {
            initialCountry: "auto",
            geoIpLookup: function (callback) {
                $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                    var countryData = window.intlTelInputGlobals.getCountryData(),
                        input = document.querySelector("#telField3");

                });
            }


        });

    }

    $(document).ready(function () {

        var inputTel = document.querySelector("#telField");
        if (inputTel) {
        }
        $("ul[id*=country-listbox] li").click(function () {
            if ($(this).text().split('+').length > 0) {
                var countryName = $(this).text().split('+')[0]; // gets text contents of clicked li
                var countryCode = $(this).text().split('+')[1];
                hdnCountryName = document.getElementById("hdnCountryName");
                if (hdnCountryName != null) {
                    hdnCountryName.value = countryName;
                }

                hdnCountryCode = document.getElementById("hdnCountryCode");
                if (hdnCountryCode != null) {
                    hdnCountryCode.value = countryCode;
                }
            }
        });

        var inputTel = document.querySelector("#telField2");
        if (inputTel) {
        }
        $("ul[id*=country-listbox] li").click(function () {
            if ($(this).text().split('+').length > 0) {
                var countryName = $(this).text().split('+')[0]; // gets text contents of clicked li
                var countryCode = $(this).text().split('+')[1];
                hdnCountryName = document.getElementById("hdnCountryName2");
                if (hdnCountryName != null) {
                    hdnCountryName.value = countryName;
                }

                hdnCountryCode = document.getElementById("hdnCountryCode2");
                if (hdnCountryCode != null) {
                    hdnCountryCode.value = countryCode;
                }
            }
        });

        var inputTel = document.querySelector("#telField3");
        if (inputTel) {
        }
        $("ul[id*=country-listbox] li").click(function () {
            if ($(this).text().split('+').length > 0) {
                var countryName = $(this).text().split('+')[0]; // gets text contents of clicked li
                var countryCode = $(this).text().split('+')[1];
                hdnCountryName = document.getElementById("hdnCountryName3");
                if (hdnCountryName != null) {
                    hdnCountryName.value = countryName;
                }

                hdnCountryCode = document.getElementById("hdnCountryCode3");
                if (hdnCountryCode != null) {
                    hdnCountryCode.value = countryCode;
                }
            }
        });

    });

}

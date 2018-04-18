// This is just a sample script. Paste your real code (javascript or HTML) here.
"use strict";
$(function() {
    function s() {
        a.closest(".sentence").find(".typed-cursor").hide(), o.slideDown("fast", e)
    }

    function e() {
        d.show(), r.typed({
            strings: ["ls skills"],
            typeSpeed: 50,
            startDelay: 1e3,
            cursorChar: "|",
            callback: t
        })
    }

    function t() {
        r.closest(".sentence").find(".typed-cursor").hide(), $("#skills").slideDown("fast", function() {
            $("#skill-js").css("width", "95%"), 
            $("#skill-nodejs").css("width", "85%"),
            $("#skill-php").css("width", "95%"),
            $("#skill-meteor").css("width", "35%"),
            $("#skill-swift").css("width", "35%"),
            $("#skill-nosql").css("width", "70%"),
            $("#skill-sql").css("width", "85%"),
            $('#skill-mysql').css("width","85%"),
            $('#skill-css').css("width","85%"),
            $("#skill-scorm").css("width", "60%"),
            $("#skill-sysadmin").css("width", "75%"),
            i()
        })
    }

    function i() {
        h.show(), f.typed({
            strings: ["cat estudios"],
            typeSpeed: 50,
            startDelay: 1e3,
            cursorChar: "|",
            callback: c
        })
    }

    function c() {
        f.closest(".sentence").find(".typed-cursor").hide(), $("#certifications").slideDown("fast", n)
    }

    function n() {
        p.show(), u.typed({
            strings: ["tail jobs"],
            typeSpeed: 50,
            startDelay: 1e3,
            cursorChar: "|",
            callback: l
        })
    }

    function l() {
        u.closest(".sentence").find(".typed-cursor").hide(), $("#experience").slideDown("fast", nr)
    }

    function nr() {
        pr.show(), ur.typed({
            strings: ["projects"],
            typeSpeed: 50,
            startDelay: 1e3,
            cursorChar: "|",
            callback: lr
        })
    }

    function lr() {
        ur.closest(".sentence").find(".typed-cursor").hide(), $("#projects").slideDown("fast", function() {})
    }
    var o = $("#whoami"),
        a = $("#whoami-command"),
        d = $(".sentence.skills"),
        r = $("#skills-command"),
        h = $(".sentence.certifications"),
        f = $("#certifications-command"),
        p = $(".sentence.experience"),
        u = $("#experience-command"),
        pr = $(".sentence.projects"),
        ur = $("#projects-command");
    a.typed({
        strings: ["whoami"],
        typeSpeed: 50,
        startDelay: 2e3,
        cursorChar: "|",
        callback: function() {
            setTimeout(s, 1e3)
        }
    })
});

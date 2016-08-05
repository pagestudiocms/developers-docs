
Mobile Detect Plugin
=====================

Mobile Detect is a small plugin that detects if a template was requested by a Mobile Device.

.. warning:: The documentation for this page is incomplete.

The following guide will teach you the basics of tags and how to use them in your layouts.

.. contents::
   :local:
   :depth: 1

Detect Mobile Device
#####

.. code-block:: html

    {{ mobile_detect:device }}

    {{ if "{{ mobile_detect:device}" == "mobile" }}
        Greetings mobile visitor!
    {{ endif }}
    {{ if "{{ mobile_detect:device}" == "not_mobile" }}
        Greetings desktop/laptop visitor!
    {{ endif }} 

    {{ mobile_detect:redirect }}

    {{ mobile_detect:redirect location="http://m.site.com/" }}

    {{ mobile_detect:redirect location="http://site.com/" redirect="not_mobile" }} 

    {{ mobile_detect:redirect ipad="http://ipad.site.com/" kindlefire="amazon.com" }}

    {{ mobile_detect }}
        {{ if device == "ipad" }}
            Hello Steve
        {{ endif }}
        {{ if device == "android" }}
            Hello Bender
        {{ endif }}
        {{ if not_mobile}
            Hello ... Bill ???
        {{ endif }}
    {{ /mobile_detect }}

Detect Screen Size
#####

.. danger:: The Screen Resolution detection has a bug that causes the page to refresh infinitely. 

.. code-block:: html

    {{ mobile_detect:screen_detect }}

    {{ mobile_detect:screen_detect }}
    {{ if {screen_width} > 1024}You have desktop{{ endif }}
    {{ news_image }}<img scr="/image/{screen_size}/{file_name}" />{{ /news_image }}
//Alles fÃ¼r Aufgabe 1
    jQuery('#cursor-change>strong').click(function () {
        jQuery('#cursor-change>strong').removeClass('wrong');
        jQuery('#cursor-change>strong').removeClass('correct');
        if(jQuery(this).hasClass('vormerken')) {
            jQuery('strong.vormerken').toggleClass('marked');
        } else if(jQuery(this).hasClass('video')) {
            jQuery('strong.video').toggleClass('marked');
        } else if(jQuery(this).hasClass('ausleiher')) {
            jQuery('strong.ausleiher').toggleClass('marked');
        } else {
            jQuery(this).toggleClass('marked');
        }
    
    });
    
    function markWords() {
        if(jQuery('#bib').hasClass('marked')) {
            jQuery('#bib').removeClass('marked');
            jQuery('#bib').addClass('wrong');
        }
        if(jQuery('#is').hasClass('marked')) {
            jQuery('#is').removeClass('marked');
            jQuery('#is').addClass('wrong');
        }
        if(jQuery('#info').hasClass('marked')) {
            jQuery('#info').removeClass('marked');
            jQuery('#info').addClass('wrong');
        }
        if(jQuery('#verleihen').hasClass('marked')) {
            jQuery('#verleihen').removeClass('marked');
            jQuery('#verleihen').addClass('correct');
        }
        if(jQuery('strong.vormerken').hasClass('marked')) {
            jQuery('strong.vormerken').removeClass('marked');
            jQuery('strong.vormerken').addClass('correct');
        }
        if(jQuery('strong.video').hasClass('marked')) {
            jQuery('strong.video').removeClass('marked');
            jQuery('strong.video').addClass('correct');
        }
        if(jQuery('strong.ausleiher').hasClass('marked')) {
            jQuery('strong.ausleiher').removeClass('marked');
            jQuery('strong.ausleiher').addClass('correct');
        }
        if(jQuery('#strafen').hasClass('marked')) {
            jQuery('#strafen').removeClass('marked');
            jQuery('#strafen').addClass('correct');
        }
        if(jQuery('#rueckgaben').hasClass('marked')) {
            jQuery('#rueckgaben').removeClass('marked');
            jQuery('#rueckgaben').addClass('wrong');
        }
        if(jQuery('#zahlen').hasClass('marked')) {
            jQuery('#zahlen').removeClass('marked');
            jQuery('#zahlen').addClass('correct');
        }
    
        jQuery('#cursor-change>strong').removeClass('marked');
    }
    
   
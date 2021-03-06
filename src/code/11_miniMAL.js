    function createIframe(){
        if( !($('#info-popup').length) ){
            //var position = 'width: 80%; height: 70%; position: absolute; top: 15%; left: 10%';
            var position = 'max-width: 100%; max-height: 100%; min-width: 500px; min-height: 300px; width: '+miniMalWidth+'; height: '+miniMalHeight+'; position: absolute; bottom: 0%; '+ posLeft +': 0%';//phone
            if($(window).width() < 500){
              position = 'width: 100vw; height: 100%; position: absolute; top: 0%; '+ posLeft +': 0%';
            }
            var material = '<dialog class="modal-kal" id="info-popup" style="pointer-events: none;display: none; position: fixed;z-index: 9999;left: 0;top: 0;bottom: 0;width: 100%; height: 100%; background-color: transparent; padding: 0; margin: 0; border: 0;">';
            material += '<div id="modal-content" class="modal-content-kal" Style="pointer-events: all; background-color: #f9f9f9; margin: 0; '+position+'">';
            //material += '<iframe id="info-iframe" style="height:100%;width:100%;border:0;"></iframe>';
            material += '<div class="kal-tempHeader" style="position:  absolute; width: 100%; height:  103px; background-color: rgb(63,81,181); "></div>';
            material += '</div>';
            material += '</dialog>';
            $('body').after(material);

            GM_addStyle('.modal-content-kal.fullscreen{width: 100% !important;height: 100% !important; bottom: 0 !important;'+ posLeft +': 0 !important;}\
                         .modal-content-kal{-webkit-transition: all 0.5s ease; -moz-transition: all 0.5s ease; -o-transition: all 0.5s ease; transition: all 0.5s ease;}\
                         .floatbutton:hover {background-color:rgb(63,81,181);}\
                         .floatbutton:hover div {background-color:white;}\
                         .floatbutton div {background-color:black;-webkit-transition: all 0.5s ease;-moz-transition: all 0.5s ease;-o-transition: all 0.5s ease;transition: all 0.5s ease;}\
                         .floatbutton {\
                            z-index: 9999;display: none; position:fixed; bottom:40px; right:40px; border-radius: 50%; font-size: 24px; height: 56px; margin: auto; min-width: 56px; width: 56px; padding: 0; overflow: hidden; background: rgba(158,158,158,.2); box-shadow: 0 1px 1.5px 0 rgba(0,0,0,.12), 0 1px 1px 0 rgba(0,0,0,.24); line-height: normal; border: none;\
                            font-weight: 500; text-transform: uppercase; letter-spacing: 0; will-change: box-shadow; transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1); outline: none; cursor: pointer; text-decoration: none; text-align: center; vertical-align: middle; padding: 16px;\
                         }\
                         .mdl-button{\
                            background: #3f51b5; color: #fff;box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);\
                            border: none; border-radius: 2px;\
                         }');

            var iframe = document.createElement('iframe');
            iframe.setAttribute("id", "info-iframe");
            iframe.setAttribute("style", "height:100%;width:100%;border:0;");
            iframe.onload = function() {
                executejs(GM_getResourceText("materialjs"));
                executejs(GM_getResourceText("simpleBarjs"));
                var head = $("#info-iframe").contents().find("head");
                head.append('<style>#material .mdl-card__supporting-text{width: initial} .mdl-layout__header .mdl-textfield__label:after{background-color: red !important;}</style>');
                head.append('<style>\
                              .alternative-list .mdl-list{\
                                max-width: 100%;\
                                margin: 0;\
                                padding: 0;\
                              }\
                              .alternative-list .mdl-list__item{\
                                height: auto;\
                              }\
                              .alternative-list .mdl-list__item-primary-content{\
                                height: auto !important;\
                              }\
                              .alternative-list .mdl-list__item-primary-content a{\
                                display: block;\
                              }\
                              .alternative-list .mdl-list__item-text-body{\
                                height: auto !important;\
                              }\
                              \
                              .coverinfo .mdl-chip{\
                                height: auto;\
                              }\
                              .coverinfo .mdl-chip .mdl-chip__text{\
                                white-space: normal;\
                                line-height: 24px;\
                              }\
                              \
                              \
                              .mdl-layout__content::-webkit-scrollbar{\
                                width: 10px !important;\
                                background-color: #F5F5F5;\
                              }\
                              .mdl-layout__content::-webkit-scrollbar-thumb{\
                                background-color: #c1c1c1 !important;\
                              }\
                              .simplebar-track{\
                                width: 10px !important;\
                                background-color: #F5F5F5;\
                              }\
                              .simplebar-scrollbar{\
                                background-color: #c1c1c1 !important;\
                              }\
                              .simplebar-track.horizontal{\
                                display: none;\
                              }\
                              \
                              .simplebar-scrollbar{\
                                border-radius: 0px !important;\
                                right: 0 !important;\
                                width: 100% !important;\
                                opacity: 1 !important;\
                              }\
                              .simplebar-scrollbar.visible:before{\
                                display: none;\
                              }\
                              .simplebar-content{\
                                margin-right: -7px !important;\
                              }\
                              .simplebar-track{\
                                margin-top: -2px;\
                                margin-bottom: -2px;\
                              }\
                              a{\
                                text-decoration: none;\
                              }\
                              .mdl-layout__tab-panel a:hover{\
                                text-decoration: underline;\
                              }\
                              .mdl-cell{\
                                background-color: #fefefe;\
                              }\
                              \
                              #material.simple-header .mdl-layout__header .mdl-layout__tab-bar-container{\
                                display: none;\
                              }\
                              \
                              .newEp {\
                                  position: absolute;\
                                  background-color: #dedede;\
                                  height: 25px;\
                                  width: 29px;\
                                  top: 3px;\
                                  right: -4px;\
                                  background-repeat: no-repeat;\
                                  background-position: 4px 3px;\
                                  background-image: url(https://github.com/google/material-design-icons/blob/master/social/1x_web/ic_notifications_none_black_18dp.png?raw=true);\
                              }\
                            </style>');
                head.append('<style>'+GM_getResourceText("materialCSS")+'</style>');
                head.append('<style>'+GM_getResourceText("materialFont")+'</style>');
                head.append('<style>'+GM_getResourceText("simpleBarCSS")+'</style>');
                //templateIframe(url, data);
                if(displayFloatButton == 1){
                    var floatbutton = '<button class="open-info-popup floatbutton" style="">';
                    floatbutton += '<i class="my-float" style="margin-top:22px;"><div style="width: 100%; height: 4px; margin-bottom: 15%;"></div><div style="width: 100%; height: 4px; margin-bottom: 15%;"></div><div style="width: 100%; height: 4px"></div></i></button>';
                    $('#info-popup').after(floatbutton);
                    if(miniMalButtonLate != ''){
                      miniMalButton(miniMalButtonLate);
                    }
                    /*$('.open-info-popup').click(function() {
                        if($('#info-popup').css('display') == 'none'){
                            $('.floatbutton').fadeOut();
                        }
                    });*/
                }
            };
            document.getElementById("modal-content").appendChild(iframe);
        }
    }

    function templateIframe(url, data){
        var material = '\
        <div id="material" style="height: 100%;"><div class="mdl-layout mdl-js-layout mdl-layout--fixed-header\
                    mdl-layout--fixed-tabs">\
          <header class="mdl-layout__header" style="min-height: 0;">\
            <button class="mdl-layout__drawer-button" id="backbutton" style="display: none;"><i class="material-icons">arrow_back</i></button>\
            <div class="mdl-layout__header-row">\
                <!--<span class="mdl-layout-title malTitle malClear"></span>--!>\
                <button class="mdl-button mdl-js-button mdl-button--icon mdl-layout__drawer-button" id="book" style="">\
                  <i class="material-icons" class="material-icons md-48">book</i>\
                </button>\
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable" id="SearchButton" style="margin-left: -57px; margin-top: 3px; padding-left: 40px;">\
                  <label class="mdl-button mdl-js-button mdl-button--icon" for="headMalSearch">\
                    <i class="material-icons">search</i>\
                  </label>\
                  <div class="mdl-textfield__expandable-holder">\
                    <input class="mdl-textfield__input" type="text" id="headMalSearch">\
                    <label class="mdl-textfield__label" for="headMalSearch"></label>\
                  </div>\
                </div>\
                <button class="mdl-button mdl-js-button mdl-button--icon mdl-layout__drawer-button" id="material-fullscreen" style="left: initial; right: 40px;">\
                  <i class="material-icons" class="material-icons md-48">fullscreen</i>\
                </button>\
                <button class="mdl-button mdl-js-button mdl-button--icon mdl-layout__drawer-button" id="close-info-popup" style="left: initial; right: 0;">\
                    <i class="material-icons close">close</i>\
                </button>\
            </div>\
            <!-- Tabs -->\
            <div class="mdl-layout__tab-bar mdl-js-ripple-effect">';
            material += '\
            <a href="#fixed-tab-1" class="mdl-layout__tab is-active">Overview</a>\
            <a href="#fixed-tab-2" class="mdl-layout__tab reviewsTab">Reviews</a>\
            <a href="#fixed-tab-3" class="mdl-layout__tab recommendationTab">Recommendations</a>\
            <!--<a href="#fixed-tab-4" class="mdl-layout__tab">Episodes</a>-->\
            <a href="#fixed-tab-5" class="mdl-layout__tab settingsTab">Settings</a>';
            material += '\
            </div>\
          </header>\
          <main class="mdl-layout__content" data-simplebar>';
            material += '\
            <section class="mdl-layout__tab-panel is-active" id="fixed-tab-1">\
              <div id="loadOverview" class="mdl-progress mdl-js-progress mdl-progress__indeterminate" style="width: 100%; position: absolute;"></div>\
              <div class="page-content">\
              <div class="mdl-grid">\
                <div class="mdl-cell mdl-cell--1-col mdl-cell--8-col-tablet mdl-cell--6-col-phone mdl-shadow--4dp stats-block malClear" style="min-width: 120px;">\
                    \
                </div>\
                <div class="mdl-grid mdl-cell mdl-shadow--4dp coverinfo malClear" style="display:block; flex-grow: 100; min-width: 70%;">\
                  <div class="mdl-card__media mdl-cell mdl-cell--2-col" style="background-color: transparent; float:left; padding-right: 16px;">\
                      <img class="malImage malClear" style="width: 100%; height: auto;"></img>\
                  </div>\
                  <div class="mdl-cell mdl-cell--12-col">\
                      <a class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect malClear malLink" href="" style="float: right;" target="_blank"><i class="material-icons">open_in_new</i></a>\
                      <h1 class="malTitle mdl-card__title-text malClear" style="padding-left: 0px; overflow:visible;"></h1>\
                      <div class="malAltTitle mdl-card__supporting-text malClear" style="padding: 10px 0 0 0px; overflow:visible;"></div>\
                  </div>\
                  <div class="malDescription malClear mdl-cell mdl-cell--10-col" style="overflow: hidden;"></div>\
                </div>\
                <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-shadow--4dp data-block mdl-grid mdl-grid--no-spacing malClear">\
                    \
                </div>\
                <div class="mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-shadow--4dp related-block alternative-list mdl-grid malClear">\
                    \
                </div>\
                <div style="display: none;" class="mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-shadow--4dp mdl-grid alternative-list stream-block malClear">\
                    <ul class="mdl-list stream-block-inner">\
                    \
                    </ul>\
                </div>\
                <div class="mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-shadow--4dp characters-block mdl-grid malClear" style="display: none;"></div>\
                <div class="mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col mdl-shadow--4dp info-block mdl-grid malClear">\
                    \
                </div>\
              </div>\
              </div>\
            </section>\
            <section class="mdl-layout__tab-panel" id="fixed-tab-2">\
              <div id="loadReviews" class="mdl-progress mdl-js-progress mdl-progress__indeterminate" style="width: 100%; position: absolute;"></div>\
              <div class="page-content malClear" id="malReviews"></div>\
            </section>\
            <section class="mdl-layout__tab-panel" id="fixed-tab-3">\
              <div id="loadRecommendations" class="mdl-progress mdl-js-progress mdl-progress__indeterminate" style="width: 100%; position: absolute;"></div>\
              <div class="page-content malClear" id="malRecommendations"></div>\
            </section>\
            <section class="mdl-layout__tab-panel" id="fixed-tab-4">\
              <div id="loadEpisode" class="mdl-progress mdl-js-progress mdl-progress__indeterminate" style="width: 100%; position: absolute;"></div>\
              <div class="page-content malClear" id="malEpisodes"></div>\
            </section>';
            material +='\
            <section class="mdl-layout__tab-panel" id="fixed-tab-5">\
              <div class="page-content malClear" id="malConfig"></div>\
            </section>';
          material +='</main>\
        </div>\
        <div id="malSearchPop" style="display: none; z-index: 10; position: fixed;">\
          <div data-simplebar style="height: calc(100% - 60px); z-index: 10; width: 100%; position: fixed !important; top: 60px; background-color: #f9f9f9; width: 100%;position: fixed; top: 60px; background-color: #f9f9f9;">\
          <div id="malSearchPopInner"></div>\
          </div>\
        </div>';
        //material += '</div>';
        $("#info-iframe").contents().find("body").append(material);
        var modal = document.getElementById('info-popup');

        $("#info-iframe").contents().find("#close-info-popup").click( function(){
            modal.style.display = "none";
            $('.floatbutton').fadeIn();
            outOfTheWay();
            //$('body').css('overflow','initial');
        });

        $("#info-iframe").contents().find("#backbutton").click( function(){
            //alert();getcommondata();
            $("#info-iframe").contents().find('.mdl-layout__tab:eq(0) span').trigger( "click" );
            $(this).hide();
            $("#info-iframe").contents().find('#SearchButton').css('margin-left', '-57px');
            $("#info-iframe").contents().find('#book').css('left', '0px');
            if(currentMalData == null){
                fillIframe(url, data);
            }
            fillIframe(url, currentMalData);
        });

        $("#info-iframe").contents().find("#material-fullscreen").click( function(){
            if($('.modal-content-kal.fullscreen').length){
                $(".modal-content-kal").removeClass('fullscreen');
                $(this).find('i').text('fullscreen');
            }else{
                $(".modal-content-kal").addClass('fullscreen');
                $(this).find('i').text('fullscreen_exit');
            }
        });

        var timer;
        $("#info-iframe").contents().find("#headMalSearch").on("input", function(){
          clearTimeout(timer);
          timer = setTimeout(function(){
            if($("#info-iframe").contents().find("#headMalSearch").val() == ''){
              $("#info-iframe").contents().find('#malSearchPop').hide();
            }else{
              $("#info-iframe").contents().find('#malSearchPop').show();
              searchMal($("#info-iframe").contents().find("#headMalSearch").val(), K.listType, '#malSearchPopInner', function(){
                $("#info-iframe").contents().find("#malSearchPop .searchItem").unbind('click').click(function(event) {
                  $("#info-iframe").contents().find("#headMalSearch").val('').trigger("input").parent().parent().removeClass('is-dirty');
                  $("#info-iframe").contents().find('.malClear').hide();
                  $("#info-iframe").contents().find('.mdl-progress__indeterminate').show();
                  $("#info-iframe").contents().find("#backbutton").show();
                  $("#info-iframe").contents().find('#SearchButton').css('margin-left', '-17px');
                  $("#info-iframe").contents().find('#book').css('left', '40px');
                  $("#info-iframe").contents().find('.mdl-layout__tab:eq(0) span').trigger( "click" );
                  fillIframe($(this).attr('malhref'));
                });
              });
            }
          }, 300);
        });

        $("#info-iframe").contents().find("#book").click(function() {
          if($("#info-iframe").contents().find("#book.open").length){
            $("#info-iframe").contents().find("#book").toggleClass('open');
            $("#info-iframe").contents().find('#malSearchPop').hide();
          }else{
            $("#info-iframe").contents().find("#book").toggleClass('open');
            $("#info-iframe").contents().find('#malSearchPop').show();
            iframeBookmarks( $("#info-iframe").contents().find('#malSearchPopInner') );
          }
        });
        $('.kal-tempHeader').remove();
    }

    function fillIframe(url, data = null){
        // Iframe is missing
        if(!$("#info-iframe").length){
            $('#info-popup').remove();
            alert('The miniMAL iframe could not be loaded.\nThis could be caused by an AdBlocker, such as 9anime Companion\'s AdBlock-option.');
        }
        outOfTheWay();
        $("#info-iframe").contents().find('.malClear').hide();
        $("#info-iframe").contents().find('.mdl-progress__indeterminate').show();

        if( !/\/(manga|anime)\//i.test(url) && url != null){
          //alert(url);
          url = '';
        }

        if(data == null && url != null && url != ''){
            getAjaxData(url, function(newdata){
                fillIframe(url, newdata);
            });
            return;
        }
        if( !($("#info-iframe").contents().find('#material').length) ){
            templateIframe(url,data);
        }

        if(url == null | url == '' | data == '404'){
          $("#info-iframe").contents().find('#material').addClass('simple-header');
          $("#info-iframe").contents().find('.mdl-layout__tab-panel.is-active').removeClass('is-active');
          $("#info-iframe").contents().find('.mdl-layout__tab-panel').last().addClass('is-active');
        }else{
          $("#info-iframe").contents().find('#material').removeClass('simple-header');
        }

        iframeConfig(url, data);
        iframeOverview(url, data);
        $("#info-iframe").contents().find('.reviewsTab').off('click').one('click',function(){
            iframeReview(url, data);
            fixIframeLink();
        });
        //iframeEpisode(url, data);
        $("#info-iframe").contents().find('.recommendationTab').off('click').one('click',function(){
            iframeRecommendations(url, data);
        });
        $("#info-iframe").contents().find('.mdl-layout__tab.is-active').trigger( "click" );
        executejs('componentHandler.upgradeDom();');
        fixIframeLink();
    }

    function iframeConfig(url, data){
        try{
            var settingsUI = '<ul class="demo-list-control mdl-list" style="margin: 0px; padding: 0px;">\
            <div class="mdl-grid">';
            try{
              var malUrl = GM_getValue(K.dbSelector+'/'+$.titleToDbKey(K.urlAnimeSelector(K.normalUrl()))+'/Mal' , null);
            }catch(e){
              var malUrl = null;
            }
            if(malUrl == url){
                settingsUI += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp">\
                                <div class="mdl-card__title mdl-card--border">\
                                    <h2 class="mdl-card__title-text">';
                                    if(data != null && data != '404'){
                                      settingsUI += data.split('itemprop="name">')[1].split('<')[0];
                                    }else{
                                      settingsUI += 'Not Found';
                                    }
                                    settingsUI +=
                                    '</h2>\
                                </div>\
                                  <div class="mdl-list__item">\
                                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">\
                                      <input class="mdl-textfield__input" style="padding-right: 18px;" type="number" step="1" id="malOffset" value="'+GM_getValue(K.dbSelector+'/'+$.titleToDbKey(K.urlAnimeSelector(K.normalUrl()))+'/Offset' , '')+'">\
                                  <label class="mdl-textfield__label" for="malOffset">Episode Offset</label>\
                                    '+getTooltip('Input the episode offset, if an anime has 12 episodes, but uses the numbers 0-11 rather than 1-12, you simply type " +1 " in the episode offset.','float: right; margin-top: -17px;','left')+'\
                                  </div>\
                                </div>\
                                <div class="mdl-list__item" style="padding-bottom: 0;padding-top: 0;">\
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">\
                                    <input class="mdl-textfield__input" style="padding-right: 18px;" type="text" id="malUrlInput" value="'+malUrl+'">\
                                <label class="mdl-textfield__label" for="malUrlInput">MyAnimeList Url</label>\
                                  '+getTooltip('Only change this URL if it points to the wrong anime page on MAL.','float: right; margin-top: -17px;','left')+'\
                                </div>\
                              </div>\
                              \
                              <div class="mdl-list__item" style="padding-bottom: 0;padding-top: 0;">\
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">\
                                <label class="mdl-textfield__label" for="malSearch">\
                                  Search\
                                </label>\
                                  <input class="mdl-textfield__input" style="padding-right: 18px;" type="text" id="malSearch">\
                                  '+getTooltip('This field is for finding an anime, when you need to replace the "MyAnimeList Url" shown above.<br>To make a search, simply begin typing the name of an anime, and a list with results will automatically appear as you type.','float: right; margin-top: -17px;','left')+'\
                              </div>\
                              </div>\
                              <div class="mdl-list__item" style="min-height: 0; padding-bottom: 0; padding-top: 0;">\
                                <div class="malResults" id="malSearchResults"></div>\
                              </div>\
                              \
                              <div class="mdl-list__item">\
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="malSubmit">Update</button>\
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" id="malReset" style="margin-left: 5px;">Reset</button>\
                                </div>\
                              </div>';

            }
                settingsUI += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp">\
                            <div class="mdl-card__title mdl-card--border">\
                                <h2 class="mdl-card__title-text">General</h2>\
                                </div>';
                settingsUI += materialCheckbox(autoTracking,'autoTracking','Autotracking'+getTooltip('Autotracking is the function where this script automatically updates the anime´s you watch with your MAL account.','','bottom'));
                settingsUI += '<li class="mdl-list__item">\
                                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">\
                                      <input class="mdl-textfield__input" type="number" step="1" id="malDelay" value="'+delay+'">\
                                  <label class="mdl-textfield__label" for="malDelay">Autotracking delay (Seconds)</label>\
                                  </div>\
                              </li>';
                settingsUI += '</div>';

                settingsUI += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp">\
                            <div class="mdl-card__title mdl-card--border">\
                                <h2 class="mdl-card__title-text">MAL Bookmark Page</h2>\
                                </div>';
                settingsUI += materialCheckbox(tagLinks,'tagLinks','Continue watching links'+getTooltip('If enabled: On your MAL Anime List and the bookmark list in miniMAL, an icon-link will be added to the last used streaming site you were using to watch an anime.<br>Simply click the icon to continue watching the anime.'));
                settingsUI += materialCheckbox(epPredictions,'epPredictions','Predict episode number');
                settingsUI += '<li class="mdl-list__item">\
                                  <span class="mdl-list__item-primary-content">\
                                      Check for new episodes\
                                  </span>\
                                  <span class="mdl-list__item-secondary-action">\
                                    <select name="myinfo_score" id="newEpInterval" class="inputtext mdl-textfield__input" style="outline: none;">\
                                      <option value="null">Off</option>\
                                      <option value="3600000">1 Hour</option>\
                                      <option value="43200000">12 Hour</option>\
                                      <option value="0">Always</option>\
                                    </select>\
                                  </span>\
                              </li>';
                settingsUI += '<li class="mdl-list__item">\
                                  <span class="mdl-list__item-primary-content">\
                                    Border Color <a href="https://www.webpagefx.com/web-design/color-picker/" target="_blank"><div id="newEpBorder_color" style="width: 20px; border: 1px solid grey; height: 20px; margin-left: 5px; background-color: #'+newEpBorder+'"/></a>\
                                  </span>\
                                  <div class="mdl-list__item-secondary-action">\
                                      <select name="newEpBorder_dropdown" id="newEpBorder_dropdown" class="inputtext mdl-textfield__input" style="outline: none;">\
                                        <option value="c">Custom</option>\
                                        <option value="ff0000">Red</option>\
                                        <option value="2e51a2">MAL Blue</option>\
                                        <option value=" ">Off</option>\
                                      </select>\
                                      <input class="mdl-textfield__input" type="text" id="newEpBorder" size="6" maxlength="6" value="'+newEpBorder+'">\
                                  </div>\
                              </li>';
                settingsUI += materialCheckbox(newEpNotification,'newEpNotification','Notifications');
                settingsUI += materialCheckbox(openInBg,'openInBg','Load cookies in background');
                settingsUI += materialCheckbox(newEpCR,'newEpCR','CR-Unblocker Extension');
                settingsUI += '</div>';

                settingsUI += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp">\
                            <div class="mdl-card__title mdl-card--border">\
                                <h2 class="mdl-card__title-text">Streaming Site Links</h2>';

                settingsUI += getTooltip('If disabled, the streaming site will no longer appear in an animes sidebar on MAL.');

                settingsUI += '</div>';


                settingsUI += materialCheckbox(kissanimeLinks,'kissanimeLinks','KissAnime');
                settingsUI += materialCheckbox(masteraniLinks,'masteraniLinks','MasterAnime');
                settingsUI += materialCheckbox(nineanimeLinks,'nineanimeLinks','9anime');
                settingsUI += materialCheckbox(crunchyrollLinks,'crunchyrollLinks','Crunchyroll');
                settingsUI += materialCheckbox(gogoanimeLinks,'gogoanimeLinks','Gogoanime');
                settingsUI += materialCheckbox(kissmangaLinks,'kissmangaLinks','KissManga');
                settingsUI += materialCheckbox(mangadexLinks,'mangadexLinks','MangaDex');
                settingsUI += '</div>';

                settingsUI += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp">\
                            <div class="mdl-card__title mdl-card--border">\
                                <h2 class="mdl-card__title-text">MyAnimeList</h2>\
                                    </div>';
                settingsUI += '<li class="mdl-list__item">\
                                  <span class="mdl-list__item-primary-content">\
                                      Thumbnails\
                                  '+getTooltip('The option is for resizing the thumbnails on MAL.<br>Like thumbnails for characters, people, recommendations, etc.')+'\
                                  </span>\
                                  <span class="mdl-list__item-secondary-action">\
                                    <select name="myinfo_score" id="malThumbnail" class="inputtext mdl-textfield__input" style="outline: none;">\
                                      <option value="144">Large</option>\
                                      <option value="100">Medium</option>\
                                      <option value="60">Small</option>\
                                      <option value="0">MAL Default</option>\
                                    </select>\
                                  </span>\
                              </li>';
                settingsUI += materialCheckbox(mangaStore,'mangaStore','Hide Manga Store');
                settingsUI += '</div>';

                settingsUI += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp">\
                                <div class="mdl-card__title mdl-card--border">\
                                  <h2 class="mdl-card__title-text">miniMAL</h2>\
                                  <span style="margin-left: auto; color: #7f7f7f;">Shortcut: Ctrl + m</span>\
                                </div>';
                settingsUI += '<li class="mdl-list__item">\
                                  <span class="mdl-list__item-primary-content">\
                                      Display to the\
                                  </span>\
                                  <span class="mdl-list__item-secondary-action">\
                                    <select name="myinfo_score" id="posLeft" class="inputtext mdl-textfield__input" style="outline: none;">\
                                      <option value="left">Left</option>\
                                      <option value="right">Right</option>\
                                    </select>\
                                  </span>\
                              </li>';
                settingsUI += materialCheckbox(miniMALonMal,'miniMALonMal','Display on MyAnimeList');
                settingsUI += materialCheckbox(displayFloatButton,'displayFloatButton','Floating menu button');

                settingsUI += materialCheckbox(outWay,'outWay','Move video out of the way');
                settingsUI += '<li class="mdl-list__item" style="display: inline-block; width: 50%;">\
                                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">\
                                      <input class="mdl-textfield__input" type="text" step="1" id="miniMalHeight" value="'+miniMalHeight+'">\
                                  <label class="mdl-textfield__label" for="miniMalHeight">Height (px / %)\
                                  </label>\
                                  </div>\
                              </li>';
                settingsUI += '<li class="mdl-list__item" style="display: inline-block; width: 50%;">\
                                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width: 100%;">\
                                      <input class="mdl-textfield__input" type="text" step="1" id="miniMalWidth" value="'+miniMalWidth+'">\
                                  <label class="mdl-textfield__label" for="miniMalWidth">Width (px / %)</label>\
                                  </div>\
                              </li>';
                settingsUI += '</div>';

                settingsUI += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp hoverinfoDeact">';
                settingsUI += materialCheckbox(episodeInfoBox,'episodeInfoBox','Episode Hoverinfo'+getTooltip('<img style="width: 200%; margin-bottom: -16px; margin-top: -16px; margin-left: -200px; margin-right: -200px;" src="https://raw.githubusercontent.com/lolamtisch/KissAnimeList/master/Screenshots/2fhq9cL.gif" alt="Episode Hoverinfo">'), true);
                settingsUI += '<div class="mdl-card__title mdl-card--border" style="padding: 0;"></div>';
                settingsUI += materialCheckbox(episodeInfoSynopsis,'episodeInfoSynopsis','Synopsis'+getTooltip('If enabled, the episode-synopsis from MAL will be displayed in the Episode Hoverinfo.'));
                settingsUI += materialCheckbox(episodeInfoImage,'episodeInfoImage','Image'+getTooltip('If enabled, the episode-image from MAL will be displayed in the Episode Hoverinfo.'));
                settingsUI += materialCheckbox(episodeInfoSubtitle,'episodeInfoSubtitle','Alternative Title'+getTooltip('If enabled, the alternative title for the episode, will be displayed in the Episode Hoverinfo. Example using the anime "Fate/Apocrypha":<br>Title: "Apocrypha: The Great Holy Grail War"<br>Subtitle: "Gaiten: Seihai Taisen (外典:聖杯大戦)"'));
                settingsUI += '</div>';

                settingsUI += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp">\
                            <div class="mdl-card__title mdl-card--border">\
                                <h2 class="mdl-card__title-text">ETC</h2>\
                                </div>';
                settingsUI += materialCheckbox(debugging,'debugging','Debugging');
                settingsUI += '<li class="mdl-list__item"><button type="button" id="clearCache" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Clear Cache</button></li>';
                settingsUI += '</div>';

            $("#info-iframe").contents().find('#malConfig').html(settingsUI);

            $("#info-iframe").contents().find("#malReset").click( function(){
                GM_deleteValue( K.dbSelector+'/'+$.titleToDbKey(K.urlAnimeSelector(K.normalUrl()))+'/Mal' );
                flashm( "MyAnimeList url reset" , false);
                checkdata();
            });

            $("#info-iframe").contents().find("#malSubmit").click( function(){
                var murl = $("#info-iframe").contents().find("#malUrlInput").val();
                local_setValue(K.normalUrl(), murl, true);
                flashm( "new url '"+murl+"' set." , false);
                checkdata();
            });

            $("#info-iframe").contents().find("#malDelay").on("input", function(){
                var tempDelay = $("#info-iframe").contents().find("#malDelay").val();
                if(tempDelay !== null){
                    if(tempDelay !== ''){
                        delay = tempDelay;
                        GM_setValue( 'delay', tempDelay );
                        flashm( "New delay ("+delay+") set." , false);
                    }else{
                        delay = 3;
                        GM_deleteValue( 'delay' );
                        flashm( "Delay reset" , false);
                    }
                }
            });

            $("#info-iframe").contents().find("#miniMalWidth").on("input", function(){
                var miniMalWidth = $("#info-iframe").contents().find("#miniMalWidth").val();
                if(miniMalWidth !== null){
                    if(miniMalWidth !== ''){
                        GM_setValue( 'miniMalWidth', miniMalWidth );
                        flashm( "New Width ("+miniMalWidth+") set." , false);
                    }else{
                        miniMalWidth = '30%';
                        GM_deleteValue( 'miniMalWidth' );
                        flashm( "Width reset" , false);
                    }
                }
                $("#modal-content").css('width', miniMalWidth);
            });

            $("#info-iframe").contents().find("#miniMalHeight").on("input", function(){
                var miniMalHeight = $("#info-iframe").contents().find("#miniMalHeight").val();
                if(miniMalHeight !== null){
                    if(miniMalHeight !== ''){
                        GM_setValue( 'miniMalHeight', miniMalHeight );
                        flashm( "New Height ("+miniMalHeight+") set." , false);
                    }else{
                        miniMalHeight = '90%';
                        GM_deleteValue( 'miniMalHeight' );
                        flashm( "Height reset" , false);
                    }
                }
                $("#modal-content").css('height', miniMalHeight);
            });

            $("#info-iframe").contents().find("#malOffset").on("input", function(){
                var Offset = $("#info-iframe").contents().find("#malOffset").val();
                if(Offset !== null){
                    if(Offset !== ''){
                        GM_setValue( K.dbSelector+'/'+$.titleToDbKey(K.urlAnimeSelector(K.normalUrl()))+'/Offset', Offset );
                        flashm( "New Offset ("+Offset+") set." , false);
                    }else{
                        GM_deleteValue( K.dbSelector+'/'+$.titleToDbKey(K.urlAnimeSelector(K.normalUrl()))+'/Offset' );
                        flashm( "Offset reset" , false);
                    }
                }
            });

            var timer;
            $("#info-iframe").contents().find("#malSearch").on("input", function(){
              clearTimeout(timer);
              timer = setTimeout(function(){
                searchMal( $("#info-iframe").contents().find("#malSearch").val(), K.listType, '.malResults', function(){
                  $("#info-iframe").contents().find("#malSearchResults .searchItem").unbind('click').click(function(event) {
                    $("#info-iframe").contents().find('#malUrlInput').val($(this).attr('malhref'));
                    $("#info-iframe").contents().find('#malSearch').val('');
                    $("#info-iframe").contents().find('#malSearchResults').html('');
                  });
                });
              }, 300);
            });

            $("#info-iframe").contents().find("#clearCache").click( function(){
                clearCache();
            });

            $("#info-iframe").contents().find('#autoTracking').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('autoTracking', 1);
                    autoTracking = 1;
                }else{
                    GM_setValue('autoTracking', 0);
                    autoTracking = 0;
                }
            });
            $("#info-iframe").contents().find('#tagLinks').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('tagLinks', 1);
                    tagLinks = 1;
                }else{
                    GM_setValue('tagLinks', 0);
                    tagLinks = 0;
                }
            });
            $("#info-iframe").contents().find('#newEpNotification').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('newEpNotification', 1);
                    newEpNotification = 1;
                }else{
                    GM_setValue('newEpNotification', 0);
                    newEpNotification = 0;
                }
            });
            $("#info-iframe").contents().find('#openInBg').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('openInBg', 1);
                    openInBg = 1;
                }else{
                    GM_setValue('openInBg', 0);
                    openInBg = 0;
                }
            });
            $("#info-iframe").contents().find('#newEpCR').change(function(){
                if($(this).is(":checked")){
                    alert('Only activate this option if you have the Extension CR-Unblocker installed!');
                    GM_setValue('newEpCR', 1);
                    newEpCR = 1;
                }else{
                    GM_setValue('newEpCR', 0);
                    newEpCR = 0;
                }
            });

            $("#info-iframe").contents().find('#kissmangaLinks').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('kissmangaLinks', 1);
                    kissmangaLinks = 1;
                }else{
                    GM_setValue('kissmangaLinks', 0);
                    kissmangaLinks = 0;
                }
            });
            $("#info-iframe").contents().find('#mangadexLinks').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('mangadexLinks', 1);
                    mangadexLinks = 1;
                }else{
                    GM_setValue('mangadexLinks', 0);
                    mangadexLinks = 0;
                }
            });

            $("#info-iframe").contents().find('#kissanimeLinks').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('kissanimeLinks', 1);
                    kissanimeLinks = 1;
                }else{
                    GM_setValue('kissanimeLinks', 0);
                    kissanimeLinks = 0;
                }
            });
            $("#info-iframe").contents().find('#masteraniLinks').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('masteraniLinks', 1);
                    masteraniLinks = 1;
                }else{
                    GM_setValue('masteraniLinks', 0);
                    masteraniLinks = 0;
                }
            });
            $("#info-iframe").contents().find('#nineanimeLinks').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('nineanimeLinks', 1);
                    nineanimeLinks = 1;
                }else{
                    GM_setValue('nineanimeLinks', 0);
                    nineanimeLinks = 0;
                }
            });
            $("#info-iframe").contents().find('#crunchyrollLinks').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('crunchyrollLinks', 1);
                    crunchyrollLinks = 1;
                }else{
                    GM_setValue('crunchyrollLinks', 0);
                    crunchyrollLinks = 0;
                }
            });
            $("#info-iframe").contents().find('#gogoanimeLinks').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('gogoanimeLinks', 1);
                    gogoanimeLinks = 1;
                }else{
                    GM_setValue('gogoanimeLinks', 0);
                    gogoanimeLinks = 0;
                }
            });

            $("#info-iframe").contents().find("#posLeft").val(posLeft);
            $("#info-iframe").contents().find("#posLeft").change(function(){
              GM_setValue( 'posLeft', $("#info-iframe").contents().find("#posLeft").val() );
            });

            $("#info-iframe").contents().find('#displayFloatButton').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('displayFloatButton', 1);
                    displayFloatButton = 1;
                }else{
                    GM_setValue('displayFloatButton', 0);
                    displayFloatButton = 0;
                }
            });
            $("#info-iframe").contents().find('#episodeInfoBox').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('episodeInfoBox', 1);
                    episodeInfoBox = 1;
                }else{
                    GM_setValue('episodeInfoBox', 0);
                    episodeInfoBox = 0;
                }
            });
            $("#info-iframe").contents().find('#episodeInfoSynopsis').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('episodeInfoSynopsis', 1);
                    episodeInfoSynopsis = 1;
                }else{
                    GM_setValue('episodeInfoSynopsis', 0);
                    episodeInfoSynopsis = 0;
                }
            });
            $("#info-iframe").contents().find('#episodeInfoImage').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('episodeInfoImage', 1);
                    episodeInfoImage = 1;
                }else{
                    GM_setValue('episodeInfoImage', 0);
                    episodeInfoImage = 0;
                }
            });
            $("#info-iframe").contents().find('#episodeInfoSubtitle').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('episodeInfoSubtitle', 1);
                    episodeInfoSubtitle = 1;
                }else{
                    GM_setValue('episodeInfoSubtitle', 0);
                    episodeInfoSubtitle = 0;
                }
            });

            $("#info-iframe").contents().find('#miniMALonMal').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('miniMALonMal', 1);
                    miniMALonMal = 1;
                }else{
                    GM_setValue('miniMALonMal', 0);
                    miniMALonMal = 0;
                }
            });

            $("#info-iframe").contents().find('#outWay').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('outWay', 1);
                    outWay = 1;
                }else{
                    GM_setValue('outWay', 0);
                    outWay = 0;
                }
            });

            $("#info-iframe").contents().find("#malThumbnail").val(malThumbnail);
            $("#info-iframe").contents().find("#malThumbnail").change(function(){
              GM_setValue( 'malThumbnail', $("#info-iframe").contents().find("#malThumbnail").val() );
            });

            $("#info-iframe").contents().find('#mangaStore').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('mangaStore', 1);
                    mangaStore = 1;
                }else{
                    GM_setValue('mangaStore', 0);
                    mangaStore = 0;
                }
            });

            $("#info-iframe").contents().find('#debugging').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('debugging', 1);
                    debugging = 1;
                }else{
                    GM_setValue('debugging', 0);
                    debugging = 0;
                }
            });

            $("#info-iframe").contents().find('#epPredictions').change(function(){
                if($(this).is(":checked")){
                    GM_setValue('epPredictions', 1);
                    epPredictions = 1;
                }else{
                    GM_setValue('epPredictions', 0);
                    epPredictions = 0;
                }
            });

            $("#info-iframe").contents().find("#newEpInterval").val(newEpInterval);
            $("#info-iframe").contents().find("#newEpInterval").change(function(){
              GM_setValue( 'newEpInterval', $("#info-iframe").contents().find("#newEpInterval").val() );
            });

            $("#info-iframe").contents().find("#newEpBorder").change(function(){
              GM_setValue( 'newEpBorder', $("#info-iframe").contents().find("#newEpBorder").val() );
              $("#info-iframe").contents().find('#newEpBorder_color').css('background-color', '#'+$("#info-iframe").contents().find("#newEpBorder").val());
            });

            $("#info-iframe").contents().find("#newEpBorder_dropdown").val(newEpBorder);
            $("#info-iframe").contents().find("#newEpBorder_dropdown").change(function(){
              var dvalue=  $("#info-iframe").contents().find("#newEpBorder_dropdown").val();
              if(dvalue == 'c'){
                $("#info-iframe").contents().find("#newEpBorder").show();
              }else{
                $("#info-iframe").contents().find("#newEpBorder").hide();

                $("#info-iframe").contents().find("#newEpBorder").val( dvalue );
                $("#info-iframe").contents().find("#newEpBorder").trigger("change");
                if(dvalue == ' '){
                  $("#info-iframe").contents().find('#newEpBorder_color').css('background-color','transparent');
                }
              }
            });
            $("#info-iframe").contents().find("#newEpBorder_dropdown").trigger("change");

            $("#info-iframe").contents().find('#malConfig').show();
        }catch(e) {console.log('[iframeConfig] Error:',e);}
    }

    function iframeOverview(url, data){
        $("#info-iframe").contents().find('#loadOverview').hide();
        try{
            var image = data.split('js-scrollfix-bottom')[1].split('<img src="')[1].split('"')[0];
            $("#info-iframe").contents().find('.malImage').attr("src",image).show();
            $("#info-iframe").contents().find('.coverinfo').show();
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            var title = data.split('itemprop="name">')[1].split('<')[0];
            $("#info-iframe").contents().find('.malTitle').html(title).show();
            $("#info-iframe").contents().find('.coverinfo').show();
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            $("#info-iframe").contents().find('.malLink').attr('href',url).show();
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            var description = data.split('itemprop="description">')[1].split('</span')[0];
            $("#info-iframe").contents().find('.malDescription').html('<p style="color: black;">'+description+'</p>').show();
            $("#info-iframe").contents().find('.coverinfo').show();
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            var statsBlock = data.split('<h2>Statistics</h2>')[1].split('<h2>')[0];
            var html = $.parseHTML( statsBlock );
            var statsHtml = '<ul class="mdl-list mdl-grid mdl-grid--no-spacing mdl-cell mdl-cell--12-col" style="display: flex; justify-content: space-around;">';
            $.each($(html).filter('div').slice(0,5), function( index, value ) {
                statsHtml += '<li class="mdl-list__item mdl-list__item--two-line" style="padding: 0; padding-left: 10px; padding-right: 3px; min-width: 18%;">';
                    statsHtml += '<span class="mdl-list__item-primary-content">';
                        statsHtml += '<span>';
                            statsHtml += $(this).find('.dark_text').text();
                        statsHtml += '</span>';
                        statsHtml += '<span class="mdl-list__item-sub-title">';
                            statsHtml += $(this).find('span[itemprop=ratingValue]').height() != null ? $(this).find('span[itemprop=ratingValue]').text() : $(this).clone().children().remove().end().text();
                        statsHtml += '</span>';
                    statsHtml += '</span>';
                statsHtml += '</li>';
            });
            statsHtml += '</ul>';
            $("#info-iframe").contents().find('.stats-block').html(statsHtml).show();
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            var altTitle = data.split('<h2>Alternative Titles</h2>')[1].split('<h2>')[0];
            altTitle = altTitle.replace(/spaceit_pad/g,'mdl-chip" style="margin-right: 5px;');
            $("#info-iframe").contents().find('.malAltTitle').html(altTitle);
            $("#info-iframe").contents().find('.malAltTitle .mdl-chip').contents().filter(function() {
                return this.nodeType == 3 && $.trim(this.textContent) != '';
            }).wrap('<span class="mdl-chip__text" />');
            $("#info-iframe").contents().find('.malAltTitle').show();
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            var infoBlock = data.split('<h2>Information</h2>')[1].split('<h2>')[0];
            var html = $.parseHTML( infoBlock );
            var infoHtml = '<ul class="mdl-grid mdl-grid--no-spacing mdl-list mdl-cell mdl-cell--12-col">';
            $.each($(html).filter('div'), function( index, value ) {
                if((index + 4) % 4 == 0 && index != 0){
                    //infoHtml +='</ul><ul class="mdl-list mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet">';
                }
                infoHtml += '<li class="mdl-list__item mdl-list__item--three-line mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet">';
                    infoHtml += '<span class="mdl-list__item-primary-content">';
                        infoHtml += '<span>';
                            infoHtml += $(this).find('.dark_text').text();
                        infoHtml += '</span>';
                        infoHtml += '<span class="mdl-list__item-text-body">';
                            $(this).find('.dark_text').remove();
                            infoHtml += $(this).html();
                            //$(this).find('*').each(function(){infoHtml += $(this)[0].outerHTML});
                            //infoHtml += $(this).find('span[itemprop=ratingValue]').height() != null ? $(this).find('span[itemprop=ratingValue]').text() : $(this).clone().children().remove().end().text();
                        infoHtml += '</span>';
                    infoHtml += '</span>';
                infoHtml += '</li>';
            });
            infoHtml += '</ul>';
            $("#info-iframe").contents().find('.info-block').html(infoHtml).show();
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            var relatedBlock = data.split('Related ')[1].split('</h2>')[1].split('<h2>')[0];
            var related = $.parseHTML( relatedBlock );
            var relatedHtml = '<ul class="mdl-list">';
            $.each($(related).filter('table').find('tr'), function( index, value ) {
                relatedHtml += '<li class="mdl-list__item mdl-list__item--two-line">';
                    relatedHtml += '<span class="mdl-list__item-primary-content">';
                        relatedHtml += '<span>';
                            relatedHtml += $(this).find('.borderClass').first().text();
                        relatedHtml += '</span>';
                        relatedHtml += '<span class="mdl-list__item-sub-title">';
                            relatedHtml += $(this).find('.borderClass').last().html();
                        relatedHtml += '</span>';
                    relatedHtml += '</span>';
                relatedHtml += '</li>';
            });
            relatedHtml += '</ul>';
            $("#info-iframe").contents().find('.related-block').html(relatedHtml).show();
            $("#info-iframe").contents().find('.related-block .mdl-list__item-sub-title').each(function(){$(this).html($(this).children()); });
            $("#info-iframe").contents().find('#material .related-block a').each(function() {
              $(this).click(function(e) {
                $("#info-iframe").contents().find('.malClear').hide();
                $("#info-iframe").contents().find('.mdl-progress__indeterminate').show();
                $("#info-iframe").contents().find("#backbutton").show();
                $("#info-iframe").contents().find('#SearchButton').css('margin-left', '-17px');
                $("#info-iframe").contents().find('#book').css('left', '40px');
                fillIframe($(this).attr('href'));
              }).attr('onclick','return false;');
            });
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
              var localListType = url.split('/')[3];
              var dataBlock = data.split('id="addtolist"')[1].split('<div id="myinfoDisplay"')[0];
              if (~data.indexOf("header-menu-login")){
                  dataBlock = "Please log in on <a target='_blank' href='https://myanimelist.net/login.php'>MyAnimeList!<a>";
              }else{
                  dataBlock = dataBlock.substring(dataBlock.indexOf(">") + 1);
              }
              $("#info-iframe").contents().find('.data-block').html(dataBlock).show();
              $("#info-iframe").contents().find('.data-block tr:not(:last-child)').each(function(){
                  var label = $(this).find('.spaceit').first().text();
                  //$(this).find('.spaceit').first().html('<span>'+label+'</span>');
                  $(this).replaceWith($('<li class="mdl-list__item mdl-list__item--three-line">\
                      <span class="mdl-list__item-primary-content">\
                          <span>'+label+'</span>\
                          <span class="mdl-list__item-text-body">'+$(this).find('.spaceit').last().html()+'</span>\
                      </span>\
                      \</li>'));
              });
              $("#info-iframe").contents().find('#myinfo_status,#myinfo_score').addClass('mdl-textfield__input').css('outline', 'none');
              $("#info-iframe").contents().find('#myinfo_watchedeps,#myinfo_chapters,#myinfo_volumes').addClass('mdl-textfield__input').css('width','35px').css('display','inline-block');
              $("#info-iframe").contents().find('.inputButton').addClass('mdl-button mdl-js-button mdl-button--raised mdl-button--colored').css('margin-right','5px');
              $("#info-iframe").contents().find('.data-block li').last().after('<li class="mdl-list__item">'+$("#info-iframe").contents().find('.inputButton').first().parent().html()+'</li>');
              $("#info-iframe").contents().find('.data-block tr').remove();
              $("#info-iframe").contents().find('.js-'+localListType+'-update-button, .js-'+localListType+'-add-button').click(function (){
                  var anime = {};
                  if(localListType == 'anime'){
                      anime['.add_anime[num_watched_episodes]'] = parseInt($("#info-iframe").contents().find('#myinfo_watchedeps').val() );
                      if(isNaN(anime['.add_anime[num_watched_episodes]'])){
                          anime['.add_anime[num_watched_episodes]'] = 0;
                      }
                  }else{
                      anime['.add_manga[num_read_volumes]'] = parseInt($("#info-iframe").contents().find('#myinfo_volumes').val() );
                      if(isNaN(anime['.add_manga[num_read_volumes]'])){
                          anime['.add_manga[num_read_volumes]'] = 0;
                      }
                      anime['.add_manga[num_read_chapters]'] = parseInt($("#info-iframe").contents().find('#myinfo_chapters').val() );
                      if(isNaN(anime['.add_manga[num_read_chapters]'])){
                          anime['.add_manga[num_read_chapters]'] = 0;
                      }
                  }
                  anime['.add_'+localListType+'[score]'] = parseInt($("#info-iframe").contents().find('#myinfo_score').val() );
                  if(anime['.add_'+localListType+'[score]'] == 0){
                      anime['.add_'+localListType+'[score]'] = '';
                  }
                  anime['.add_'+localListType+'[status]'] = parseInt($("#info-iframe").contents().find('#myinfo_status').val() );
                  if(K.isOverviewPage()){
                    anime['forceUpdate'] = 2;
                  }
                  anime['malurl'] = url;

                  setanime(url, anime, null, localListType);
              });
              epPrediction(url.split('/')[4], function(timestamp, airing, diffWeeks, diffDays, diffHours, diffMinutes, episode){
                if(airing){
                    if(episode){
                        var titleMsg = 'Next episode estimated in '+diffDays+'d '+diffHours+'h '+diffMinutes+'m';
                        $("#info-iframe").contents().find('[id="curEps"]').before('<span title="'+titleMsg+'">['+episode+']</span> ');
                    }
                }
              });
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            var characterBlock = data.split('detail-characters-list')[1].split('</h2>')[0];
            var html = $.parseHTML( '<div class="detail-characters-list '+characterBlock );
            var temphtml = '';
            var charFound = 0;
            var tempWrapHtml = '<div class="mdl-card__actions clicker">\
                <h1 class="mdl-card__title-text" style="float: left;">Characters</h1>\
                <i class="material-icons mdl-accordion__icon mdl-animation--default remove" style="float: right; margin-top: 3px;">expand_more</i>\
            </div>\
            <div class="mdl-grid mdl-card__actions mdl-card--border" id="characterList" style="justify-content: space-between; display: none;"></div>';
            tempWrapHtml += '</div>';
            $.each($(html).find(':not(td) > table'), function( index, value ) {
                if(!index) charFound = 1;
                var regexDimensions = /\/r\/\d*x\d*/g;
                var charImg = $(this).find('img').first().attr("data-src");
                if ( regexDimensions.test(charImg)){
                    charImg = charImg.replace(regexDimensions, '');
                }else{
                    charImg = 'https://myanimelist.cdn-dena.com/images/questionmark_23.gif';
                }

                temphtml += '<div>';
                    temphtml += '<div class="mdl-grid" style="width: 126px;">';
                        temphtml += '<div style="width: 100%; height: auto;">';
                            temphtml += '<img style="height: auto; width: 100%;"src="'+charImg+'">';
                        temphtml += '</div>';
                        temphtml += '<div class="">';
                            temphtml += $(this).find('.borderClass .spaceit_pad').first().parent().html();
                        temphtml += '</div>';
                    temphtml += '</div>';
                temphtml += '</div>';

            });
            for(var i=0; i < 10; i++){
                temphtml +='<div class="listPlaceholder" style="height: 0;"><div class="mdl-grid" style="width: 126px;"></div></div>';
            }
            if(charFound) $("#info-iframe").contents().find('.characters-block').html(tempWrapHtml).show();
            $("#info-iframe").contents().find('.characters-block .clicker').one('click', function(){
                $("#info-iframe").contents().find('#characterList').html(temphtml).show();
                $("#info-iframe").contents().find('.characters-block .remove').remove();
                fixIframeLink();
            });
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
          var continueHtml = '';
          continueHtml +='<div class="mdl-card__actions mdl-card--border" style="padding-left: 0;">'
          continueHtml += '<div class="data title progress" style="display: inline-block; position: relative; top: 2px; margin-left: -2px;"><div class="link" style="display: none;">'+$("#info-iframe").contents().find('#myinfo_watchedeps').val()+'</div></div>';
          continueHtml +='</div>';
          getanime(url, function(actual){
            try{
              if(actual['.add_'+localListType+'[tags]'].indexOf("last::") > -1 ){
                  var url = atobURL( actual['.add_'+localListType+'[tags]'].split("last::")[1].split("::")[0] );
                  $("#info-iframe").contents().find('.malDescription').first().append(continueHtml);
                  setStreamLinks(url, $("#info-iframe").contents().find('.malDescription').first());

                  $("#info-iframe").contents().find('.malDescription .stream, .malDescription .nextStream').addClass('mdl-button mdl-button--colored mdl-js-button mdl-button--raised').css('color', 'white').find('img').css('padding-bottom', '3px').css('padding-right', '6px').css('margin-left', '-3px');
                  if(localListType == 'anime'){
                    $("#info-iframe").contents().find('.malDescription .nextStream').append('Next Episode');
                    $("#info-iframe").contents().find('.malDescription .stream').append('Continue Watching');
                  }else{
                    $("#info-iframe").contents().find('.malDescription .nextStream').append('Continue Reading');
                    $("#info-iframe").contents().find('.malDescription .stream').append('Overview');
                  }
              }
            }catch(e) {console.log('[iframeOverview] Error:',e);}
          }, url, url.split('/')[3]);
        }catch(e) {console.log('[iframeOverview] Error:',e);}

        try{
            $("#info-iframe").contents().find('.stream-block-inner').html('');
            setKissToMal(url);
        }catch(e) {console.log('[iframeOverview] Error:',e);}
    }

    function iframeReview(url, data){
        $("#info-iframe").contents().find('#loadReviews').hide();
        try{
            var reviews = data.split('Reviews</h2>')[1].split('<h2>')[0];
            var html = $.parseHTML( reviews );
            var reviewsHtml = '<div class="mdl-grid">';
            $.each($(html).filter('.borderDark'), function( index, value ) {
                reviewsHtml += '<div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">';
                    reviewsHtml += '<div class="mdl-card__supporting-text mdl-card--border" style="color: black;">';
                        $(this).find('.spaceit > div').css('max-width','60%');
                        reviewsHtml += $(this).find('.spaceit').first().html();
                    reviewsHtml += '</div>';

                    reviewsHtml += '<div class="mdl-card__supporting-text" style="color: black;">';
                        $(this).find('.textReadability, .textReadability > span').contents().filter(function(){
                            return this.nodeType == 3 && $.trim(this.nodeValue).length;
                        }).wrap('<p style="margin:0;padding=0;"/>');
                        $(this).find('br').css('line-height','10px');
                        reviewsHtml += $(this).find('.textReadability').html();
                    reviewsHtml += '</div>';
                reviewsHtml += '</div>';
            });
            reviewsHtml += '</div>';
            if(reviewsHtml == '<div class="mdl-grid"></div>'){
                reviewsHtml = '<span class="mdl-chip" style="margin: auto; margin-top: 16px; display: table;"><span class="mdl-chip__text">Nothing Found</span></span>';
            }
            $("#info-iframe").contents().find('#malReviews').html(reviewsHtml).show();
            $("#info-iframe").contents().find('.js-toggle-review-button').addClass('nojs').click(function(){
                var revID = $(this).attr('data-id');
                $("#info-iframe").contents().find('#review'+revID).css('display','initial');
                $("#info-iframe").contents().find('#revhelp_output_'+revID).remove();
                $(this).remove();
            });
            $("#info-iframe").contents().find('.mb8 a').addClass('nojs').click(function(){
                var revID = $(this).attr('onclick').split("$('")[1].split("'")[0];
                $("#info-iframe").contents().find(revID).toggle();
            });
        }catch(e) {console.log('[iframeReview] Error:',e);}
    }

    function iframeEpisode(url, data){
        getAjaxData(url+'/episode', function(data){
            try{
                $("#info-iframe").contents().find('#loadEpisode').hide();
                var episodesBlock = data.split('mt8 episode_list js-watch-episode-list ascend">')[1].split('</table>')[0];
                var episodesHtml = '<div class="mdl-grid">\
                        <div class="mdl-cell mdl-cell--12-col mdl-shadow--4dp">\
                            <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">'+episodesBlock+'</table>\
                        </div>\
                    </div>';
                $("#info-iframe").contents().find('#malEpisodes').html(episodesHtml).show();
                $("#info-iframe").contents().find('#malEpisodes .episode-video, #malEpisodes .episode-forum').remove();
            }catch(e) {console.log('[iframeEpisode] Error:',e);}
        });

    }

    function iframeRecommendations(url, data){
        getAjaxData(url+'/userrecs', function(data){
            try{
                $("#info-iframe").contents().find('#loadRecommendations').hide();
                var recommendationsBlock = data.split('Make a recommendation</a>')[1].split('</h2>')[1].split('<div class="mauto')[0];
                var html = $.parseHTML( recommendationsBlock );
                var recommendationsHtml = '<div class="mdl-grid">';
                $.each($(html).filter('.borderClass'), function( index, value ) {
                    recommendationsHtml += '<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--4dp mdl-grid">';
                        recommendationsHtml += '<div class="mdl-card__media" style="background-color: transparent; margin: 8px;">';
                            recommendationsHtml += $(this).find('.picSurround').html();
                        recommendationsHtml += '</div>';
                        recommendationsHtml += '<div class="mdl-cell" style="flex-grow: 100;">';
                            recommendationsHtml += '<div class="">';
                                $(this).find('.button_edit, .button_add, td:eq(1) > div:eq(1) span').remove();
                                recommendationsHtml += $(this).find('td:eq(1) > div:eq(1)').html();
                            recommendationsHtml += '</div>';
                            recommendationsHtml += '<div class="">';
                                $(this).find('a[href^="/dbchanges.php?go=report"]').remove();
                                recommendationsHtml += $(this).find('.borderClass').html();
                            recommendationsHtml += '</div>';
                            recommendationsHtml += '<div class="">';
                                recommendationsHtml += (typeof $(this).find('.spaceit').html() != 'undefined') ? $(this).find('.spaceit').html() : '';
                                recommendationsHtml += '<div class="more" style="display: none;">';
                                    recommendationsHtml += $(this).find('td:eq(1) > div').last().html();
                                recommendationsHtml += '</div>';
                            recommendationsHtml += '</div>';
                        recommendationsHtml += '</div>';
                        /*recommendationsHtml += '<div class="mdl-card__supporting-text mdl-card--border" style="color: black;">';
                            $(this).find('.spaceit > div').css('max-width','60%');
                            recommendationsHtml += $(this).find('.spaceit').first().html();
                        recommendationsHtml += '</div>';
                        recommendationsHtml += '<div class="mdl-card__supporting-text" style="color: black;">';
                            $(this).find('.textReadability, .textReadability > span').contents().filter(function(){
                                return this.nodeType == 3 && $.trim(this.nodeValue).length;
                            }).wrap('<p style="margin:0;padding=0;"/>');
                            $(this).find('br').css('line-height','10px');
                            recommendationsHtml += $(this).find('.textReadability').html();
                        recommendationsHtml += '</div>';*/
                        //recommendationsHtml += $(this).html();
                    recommendationsHtml += '</div>';
                });
                recommendationsHtml += '</div>';

                if(recommendationsHtml == '<div class="mdl-grid"></div>'){
                    recommendationsHtml = '<span class="mdl-chip" style="margin: auto; margin-top: 16px; display: table;"><span class="mdl-chip__text">Nothing Found</span></span>';
                }
                $("#info-iframe").contents().find('#malRecommendations').html(recommendationsHtml).show();
                $("#info-iframe").contents().find('.js-similar-recommendations-button').addClass('nojs').click(function(){$(this).parent().find('.more').toggle();});
                $("#info-iframe").contents().find('.js-toggle-recommendation-button').addClass('nojs').click(function(){
                    var revID = $(this).attr('data-id');
                    $("#info-iframe").contents().find('#recommend'+revID).css('display','initial');
                    $(this).remove();
                });
                fixIframeLink();
                $("#info-iframe").contents().find('#malRecommendations a[href^="https://myanimelist.net/anime/"],#malRecommendations a[href^="https://myanimelist.net/manga/"]').each(function() {
                    $(this).click(function(e) {
                        $("#info-iframe").contents().find('.malClear').hide();
                        $("#info-iframe").contents().find('.mdl-progress__indeterminate').show();
                        $("#info-iframe").contents().find("#backbutton").show();
                        $("#info-iframe").contents().find('#SearchButton').css('margin-left', '-17px');
                        $("#info-iframe").contents().find('#book').css('left', '40px');
                        $("#info-iframe").contents().find('.mdl-layout__tab:eq(0) span').trigger( "click" );
                        fillIframe($(this).attr('href'));
                    }).attr('onclick','return false;');
                });
                $("#info-iframe").contents().find('#malRecommendations .more .borderClass').addClass('mdl-shadow--2dp').css('padding','10px');
                $("#info-iframe").contents().find('.lazyload').each(function() { $(this).attr('src', $(this).attr('data-src'));});//TODO: use lazyloading
            }catch(e) {console.log('[iframeRecommendations] Error:',e);}
        });

    }

    function executejs(string){
        var rawframe = document.getElementById('info-iframe');
        var framedoc = rawframe.contentDocument;
        if (!framedoc && rawframe.contentWindow) {
            framedoc = rawframe.contentWindow.document;
        }
        var script = document.createElement('script');
        script.type = "text/javascript";
        //script.src = "https://code.getmdl.io/1.3.0/material.min.js";
        script.text  = string;
        framedoc.body.appendChild(script);
    }

    function materialCheckbox(option, string, text, header = false){
        var check = '';
        var sty = '';
        if(option == 1) check = 'checked';
        if(header) sty = 'font-size: 24px; font-weight: 300; line-height: normal;';
        var item =  '<li class="mdl-list__item">\
                        <span class="mdl-list__item-primary-content" style="'+sty+'">\
                            '+text+'\
                        </span>\
                        <span class="mdl-list__item-secondary-action">\
                            <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="'+string+'">\
                                <input type="checkbox" id="'+string+'" class="mdl-switch__input" '+check+' />\
                            </label>\
                        </span>\
                    </li>';
        return item;
    }

    function getAjaxData(url, callback){
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            synchronous: false,
            onload: function(response) {
                if(response.status == 200){
                  callback(response.responseText);
                }else{
                  callback('404');
                }
            }
        });
    }

    function fixIframeLink(){
        $("#info-iframe").contents().find('#material a').not('[href^="http"],[href^="https"],[href^="mailto:"],[href^="#"],[href^="javascript"]').each(function() {
            try{
                $(this).attr('href', function(index, value) {
                    if (value.substr(0,1) !== "/") {
                        value = window.location.pathname + value;
                    }
                    return "https://myanimelist.net" + value;
                });
            }catch(e){}
        });
        $("#info-iframe").contents().find('a').not(".nojs").attr('target','_blank');
    }

    function searchMal(keyword, type = 'all', selector, callback){
        $("#info-iframe").contents().find(selector).html('');
        GM_xmlhttpRequest({
            method: "GET",
            url: 'https://myanimelist.net/search/prefix.json?type='+type+'&keyword='+keyword+'&v=1',
            synchronous: false,
            onload: function(response) {
                var searchResults = $.parseJSON(response.response);
                $("#info-iframe").contents().find(selector).append('<div class="mdl-grid">\
                        <select name="myinfo_score" id="searchListType" class="inputtext mdl-textfield__input mdl-cell mdl-cell--12-col" style="outline: none; background-color: white; border: none;">\
                            <option value="anime">Anime</option>\
                            <option value="manga">Manga</option>\
                        </select>\
                    </div>');
                $("#info-iframe").contents().find('#searchListType').val(type);
                $("#info-iframe").contents().find('#searchListType').change(function(event) {
                  searchMal(keyword, $("#info-iframe").contents().find('#searchListType').val(), selector, callback)
                });
                $.each(searchResults, function() {
                    $.each(this, function() {
                        $.each(this, function() {
                            $.each(this, function() {
                                if(typeof this['name'] != 'undefined'){
                                    $("#info-iframe").contents().find(selector+' > div').append('<div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-shadow--2dp mdl-grid searchItem" malhref="'+this['url']+'" style="cursor: pointer;">\
                                        <img src="'+this['image_url']+'" style="margin: -8px 0px -8px -8px; height: 100px; width: 64px; background-color: grey;"></img>\
                                        <div style="flex-grow: 100; cursor: pointer; margin-top: 0; margin-bottom: 0;" class="mdl-cell">\
                                          <span style="font-size: 20px; font-weight: 400; line-height: 1;">'+this['name']+'</span>\
                                          <p style="margin-bottom: 0; line-height: 20px; padding-top: 3px;">Type: '+this['payload']['media_type']+'</p>\
                                          <p style="margin-bottom: 0; line-height: 20px;">Score: '+this['payload']['score']+'</p>\
                                          <p style="margin-bottom: 0; line-height: 20px;">Year: '+this['payload']['start_year']+'</p>\
                                        </div>\
                                      </div>');
                                }
                            });
                        });
                    });
                });
                callback();
            }
        });
    }

    function iframeBookmarks(element, state = 1, localListType = K.listType){
        element.html('<div id="loadRecommendations" class="mdl-progress mdl-js-progress mdl-progress__indeterminate" style="width: 100%; position: absolute;"></div>');
        executejs('componentHandler.upgradeDom();');

        var my_watched_episodes = 'num_watched_episodes';
        var series_episodes = 'anime_num_episodes';
        var localPlanTo = 'Plan to Watch';
        var localWatching = 'Watching'
        if(localListType != 'anime'){
            my_watched_episodes = 'num_read_chapters';
            series_episodes = 'manga_num_chapters';
            localPlanTo = 'Plan to Read';
            localWatching = 'Reading'
        }
        var firstEl = 1;

        getUserList(state, localListType, function(el, index, total){
          if(firstEl){
            firstEl = 0;
            var bookmarkHtml = '<div class="mdl-grid" id="malList" style="justify-content: space-around;">';
            bookmarkHtml +='<select name="myinfo_score" id="userListType" class="inputtext mdl-textfield__input mdl-cell mdl-cell--12-col" style="outline: none; background-color: white; border: none;">\
                              <option value="anime">Anime</option>\
                              <option value="manga">Manga</option>\
                            </select>';
            bookmarkHtml +='<select name="myinfo_score" id="userListState" class="inputtext mdl-textfield__input mdl-cell mdl-cell--12-col" style="outline: none; background-color: white; border: none;">\
                              <option value="7">All</option>\
                              <option value="1" selected>'+localWatching+'</option>\
                              <option value="2">Completed</option>\
                              <option value="3">On-Hold</option>\
                              <option value="4">Dropped</option>\
                              <option value="6">'+localPlanTo+'</option>\
                            </select>';
            //flexbox placeholder
            for(var i=0; i < 10; i++){
                bookmarkHtml +='<div class="listPlaceholder mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone mdl-shadow--2dp mdl-grid "  style="cursor: pointer; height: 250px; padding: 0; width: 210px; height: 0px; margin-top:0; margin-bottom:0; visibility: hidden;"></div>';
            }
            bookmarkHtml += '</div>'
            element.html( bookmarkHtml );

            $("#info-iframe").contents().find('#malSearchPop #userListType').val(localListType);
            $("#info-iframe").contents().find('#malSearchPop #userListType').change(function(event) {
              iframeBookmarks(element, state, $("#info-iframe").contents().find('#malSearchPop #userListType').val() );
            });

            $("#info-iframe").contents().find('#malSearchPop #userListState').val(state);
            $("#info-iframe").contents().find('#malSearchPop #userListState').change(function(event) {
              iframeBookmarks(element, $("#info-iframe").contents().find('#malSearchPop #userListState').val(), localListType);
            });
          }

          if(!el){
            element.find('#malList .listPlaceholder').first().before( '<span class="mdl-chip" style="margin: auto; margin-top: 16px; display: table;"><span class="mdl-chip__text">No Entries</span></span>');
            element.find('#malList .listPlaceholder').remove();
            return;
          }

          var bookmarkElement = '';
          var uid = el[localListType+'_id']
          var malUrl = 'https://myanimelist.net'+el[localListType+'_url'];
          var imageHi = el[localListType+'_image_path'];
          var regexDimensions = /\/r\/\d*x\d*/g;
          if ( regexDimensions.test(imageHi) ) {
            imageHi = imageHi.replace(/v.jpg$/g, '.jpg').replace(regexDimensions, '');
          }
          var progressProcent = ( el[my_watched_episodes] / el[series_episodes] ) * 100;
          bookmarkElement +='<div class="mdl-cell mdl-cell--2-col mdl-cell--4-col-tablet mdl-cell--6-col-phone mdl-shadow--2dp mdl-grid bookEntry e'+uid+'" malhref="'+malUrl+'" maltitle="'+el[localListType+'_title']+'" malimage="'+el[localListType+'_image_path']+'" style="position: relative; cursor: pointer; height: 250px; padding: 0; width: 210px; height: 293px;">';
            bookmarkElement +='<div class="data title" style="background-image: url('+imageHi+'); background-size: cover; background-position: center center; background-repeat: no-repeat; width: 100%; position: relative; padding-top: 5px;">';
              bookmarkElement +='<span class="mdl-shadow--2dp" style="position: absolute; bottom: 0; display: block; background-color: rgba(255, 255, 255, 0.9); padding-top: 5px; display: inline-flex; align-items: center; justify-content: space-between; left: 0; right: 0; padding-right: 8px; padding-left: 8px; padding-bottom: 8px;">'+el[localListType+'_title'];
                bookmarkElement +='<div id="p1" class="mdl-progress" series_episodes="'+el[series_episodes]+'" style="position: absolute; top: -4px; left: 0;"><div class="progressbar bar bar1" style="width: '+progressProcent+'%;"></div><div class="bufferbar bar bar2" style="width: 100%;"></div><div class="auxbar bar bar3" style="width: 0%;"></div></div>';
                bookmarkElement +='<div class="data progress mdl-chip mdl-chip--contact mdl-color--indigo-100" style="float: right; line-height: 20px; height: 20px; padding-right: 4px; margin-left: 5px;">';
                  bookmarkElement +='<div class="link mdl-chip__contact mdl-color--primary mdl-color-text--white" style="line-height: 20px; height: 20px; margin-right: 0;">'+el[my_watched_episodes]+'</div>';
                bookmarkElement +='</div>';
              bookmarkElement +='</span>';
              bookmarkElement +='<div class="tags" style="display: none;">'+el['tags']+'</div>';
            bookmarkElement +='</div>';
          bookmarkElement +='</div>';
          element.find('#malList .listPlaceholder').first().before( bookmarkElement );

          var domE = element.find('#malList .e'+uid).first();

          domE.click(function(event) {
            $("#info-iframe").contents().find('#book').click();
            $("#info-iframe").contents().find('.malClear').hide();
            $("#info-iframe").contents().find('.mdl-progress__indeterminate').show();
            $("#info-iframe").contents().find("#backbutton").show();
            $("#info-iframe").contents().find('#SearchButton').css('margin-left', '-17px');
            $("#info-iframe").contents().find('#book').css('left', '40px');
            $("#info-iframe").contents().find('.mdl-layout__tab:eq(0) span').trigger( "click" );
            fillIframe($(this).attr('malhref'));
          });

          if(domE.find('.tags').text().indexOf("last::") > -1 ){
            var url = atobURL( domE.find('.tags').text().split("last::")[1].split("::")[0] );
            setStreamLinks(url, domE);
            if( parseInt(el['status']) === 1 ){
              checkForNewEpisodes(url, domE, domE.attr('maltitle'), domE.attr('malimage'));
            }
          }

          epPrediction(domE.attr('malhref').split('/')[4], function(timestamp, airing, diffWeeks, diffDays, diffHours, diffMinutes, episode){
            if(airing){
                if(episode){
                    var titleMsg = 'Next episode estimated in '+diffDays+'d '+diffHours+'h '+diffMinutes+'m';
                    var progressBar = domE.find('.mdl-progress');
                    var predictionProgress = ( episode / progressBar.attr('series_episodes') ) * 100;
                    progressBar.prepend('<div class="predictionbar bar kal-ep-pre" ep="'+(diffWeeks+1)+'" style="width: '+predictionProgress+'%; background-color: red; z-index: 1; left: 0;"></div>');
                    domE.attr('title', titleMsg);
                }
            }
          });

        }
        ,function(){
          startCheckForNewEpisodes(localListType);
        },
        null,
        function(continueCall){
          if(state == 1){
            continueCall();
            return;
          }
          var scrollable = $("#info-iframe").contents().find('#malSearchPop .simplebar-scroll-content');
          var scrollDone = 0;
          scrollable.scroll(function() {
            if(scrollDone) return;
            if(scrollable.scrollTop() + scrollable.height() > scrollable.find('.simplebar-content').height() - 100) {
              scrollDone = 1;
              con.log('[Bookmarks]','Loading next part');
              continueCall();
            }
          });
        });
    }

    var outOfTheWayLoad = 0;
    function outOfTheWay(){
      if(outWay != 1) return;
      $(document).ready(function(){
        try{
          var minimalSelector = '#modal-content';

          reposition();
          if(outOfTheWayLoad == 0){
            outOfTheWayLoad = 1;
            $( window ).resize(function(){reposition();});
            var lastScrollLeft = 0;
            $(window).scroll(function() {
                var documentScrollLeft = $(document).scrollLeft();
                if (lastScrollLeft != documentScrollLeft) {
                    lastScrollLeft = documentScrollLeft;
                    reposition();
                }
            });
            $(document).on('mozfullscreenchange webkitfullscreenchange fullscreenchange',function(){
              reposition();
            });
          }

          function reposition(){
              $(K.videoSelector).css('transform', '');

              if(!$(minimalSelector).is(":visible")){
                  return;
              }

              var videoLeft = $(K.videoSelector).offset().left;
              var videoWidth = $(K.videoSelector).width();
              var videoRight = videoLeft + videoWidth;
            var minimalLeft = $(minimalSelector).offset().left;
            var minimalRight = minimalLeft + $(minimalSelector).width();
            var viewportWidth = $(window).width() - $(minimalSelector).width();

            if( minimalLeft == $(window).scrollLeft()){
                if( minimalRight > videoLeft){
                    var tempVideoLeft = minimalRight;
                    if(videoWidth > viewportWidth){
                          setVideo(tempVideoLeft, viewportWidth);
                    }else{
                          setVideo(tempVideoLeft, videoWidth);
                      }
                }
            }else{
                if(minimalLeft < videoRight){

                      if(videoWidth > viewportWidth){
                          var tempVideoLeft = minimalLeft - viewportWidth;
                          setVideo(tempVideoLeft, viewportWidth);
                      }else{
                          var tempVideoLeft = minimalLeft - videoWidth;
                          setVideo(tempVideoLeft, videoWidth);
                      }
                }
            }

            function setVideo(Left, Width){
                var scale = Width / videoWidth;
                Left = Left - videoLeft;
                Left = Left / scale;
                $(K.videoSelector).css('transform', 'scale('+scale+') translateX('+Left+'px)');
                $(K.videoSelector).css('transform-origin', '0% 50%');
                $(K.videoSelector).css('transition', '0s');
            }
          }
        }catch(e){}
      });
    }

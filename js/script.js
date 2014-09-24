
    function sliceArray(array, size) {
              var p = [];
                    if (size > array.length) return this;
                          for (var i=Math.floor(array.length/size); i-->0; ) {
                                      p[i]=array.slice(i*size, (i+1)*size);
                                            }
                                                  return p;
                                                      };

                                                          function emebedReplace() {
                                                                    $(".cal-link").each(function() {
                                                                                var origUrl = $(this).attr("href");
                                                                                        var newUrl = origUrl.replace('nightout.com', 'embed.nightout.com');
                                                                                                $(this).attr("href", newUrl);
                                                                                                      });
                                                                        }


                                                                            var calendars = {};
                                                                                $(document).ready( function() {

                                                                                          var token = '7p5donemy5rxy9hdb0qwnm725yw8zs5';
                                                                                                var thisMonth = moment().format('YYYY-MM');


                                                                                                      calendars.clndr1 = $('.cal1').clndr({
                                                                                                                  template: $('#calendar-responsive').html(),

                                                                                                                          multiDayEvents: {
                                                                                                                                        startDate: 'start_time',
                                                                                                                                                  endDate:   'start_time' // HAXXXX
                                                                                                                                                          },
                                                                                                                                                                  clickEvents: {
                                                                                                                                                                                onMonthChange: function(month){
                                                                                                                                                                                                emebedReplace();
                                                                                                                                                                                                            NightOutEverywhere.init();
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                              showAdjacentMonths: true,
                                                                                                                                                                                                                                      adjacentDaysChangeMonth: false


                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                    });

                                                                                                            // bind both clndrs to the left and right arrow keys
                                                                                                                  $(document).keydown( function(e) {
                                                                                                                              if(e.keyCode == 37) {
                                                                                                                                            // left arrow
                                                                                                                                                      calendars.clndr1.back();
                                                                                                                                                                calendars.clndr2.back();
                                                                                                                                                                        }
                                                                                                                                                                                if(e.keyCode == 39) {
                                                                                                                                                                                              // right arrow
                                                                                                                                                                                                        calendars.clndr1.forward();
                                                                                                                                                                                                                  calendars.clndr2.forward();
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                });

                                                                                                                        $.getJSON('https://nightout.com/api/events?oauth_token='+token+'&organization_ids=215&details=preview&callback=?', function(data) {
                                                                                                                                    $('.cal-container').removeClass('loading');
                                                                                                                                            calendars.clndr1.setEvents(data);
                                                                                                                                                    emebedReplace();
                                                                                                                                                            NightOutEverywhere.init();
                                                                                                                                                                  });



                                                                                                                            });

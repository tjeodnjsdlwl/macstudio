$(function(){

  /**
   * @헤더고정
   */
  $(window).trigger('scroll');
      $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr > 0){
          $('.header .group-header').addClass('fix')
        }else {
          $('.header .group-header').removeClass('fix')
        }
  })





 
 




  


  











gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.saveStyles(".mobile, .tablet .desktop");
  ScrollTrigger.matchMedia({
    // 모바일이상
    "(min-width: 768px)": function(){

      const txtList = document.querySelectorAll('.sc-intro .headline .text');
      txtList.forEach(element => {
        yVal = element.dataset.y;
        gsap.from(element, {
            scrollTrigger: {
              trigger: element,
              start: "0% 50%",
              end:"100% 30%",
              scrub: 0.3,
              // markers: true
            },
            opacity: 0
          });
      });





       /**
       * @proposition
       */
      //  gsap.to('.sc-proposition .txt-box', {
      //   scrollTrigger: {
      //     trigger: ".sc-proposition .group-proposition",
      //     toggleActions: "resume pause reset pause",
      //     // markers: true,
      //     scrub: 1,
      //     start: "95% 80%",
      //     end: "100% 25%",
      //     pin: '.sc-proposition .group-proposition',
      //   }
      // })
      var proTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-proposition",
          markers: true,
          scrub: 1,
          start: "0% 80%",
          end: "50% 30%"
        },
      });
      proTl
      .from('.sc-proposition h3,.sc-proposition .txt-box > *',{
        yPercent:10,
        opacity:0,
        stagger:0.2
      })


      var bgTl = gsap.timeline({
        scrollTrigger: {
              trigger: ".sc-proposition",
              toggleActions: "resume pause reset pause",
              // markers: true,
              scrub: 1,
              start: "95% 27%",
              end: "95% 27%",
            }
      });
      bgTl
      .to(".sc-proposition",{background: "#fafafa",})
      .to(".sc-convert",{'background': '#fafafa', duration: 1, delay: -1})
      .to(".sc-convert .headline-sm, .sc-convert .headline",{'color': 'rgba(17, 17, 17, 1)', duration: 1,})
      .from(".sc-convert .wrap",{opacity: 0 , duration: 1,})






    
      const canvas = document.querySelector('#canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 1080;
      canvas.height = 416;

      const frameCount = 42;
      const currentFrame = (idx) => {
        return `https://www.apple.com/105/media/us/mac-studio/2022/eb784018-d0ea-4669-b844-fed626ab0367/anim/hero/large/${idx.toString().padStart(4, '0')}.jpg`;
      }; // 리턴 필수

      const images = [];
      const card = {
        frame: 0,
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i + 1);
        images.push(img);
      }


      scrollMotion = gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-convert',
          scrub: 1,
          start: '0% 0%',
          end: '100% 80%',
          // markers:true,
          pin: ".sc-connect canvas",
        },
      })
      scrollMotion
      .to(card, { frame: frameCount - 1, snap: 'frame', ease: 'none', onUpdate: render, })
      // .to('.sc-convert canvas', { scale:2.7, })
      // .to('.sc-convert .wrap', {overflow: "hidden"})
      // .to('.sc-convert .overlay-img',0,{ opacity:1, })
      // .addLabel('a')
      // .to('.sc-convert .overlay-img',{ scale: 2.7 },'a')
      .to('.sc-convert .overlay-img .dimmed',{ opacity:1, delay: 1 },'a')
      


      images[0].onload = render;
      function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[card.frame], 0, 0);
      }  




     


      // 마우스 효과
      $('.sc-project .magic-box').mousemove(function(e){
        x = e.offsetX - $('.sc-project .magic-box').width()/2;
        y = e.offsetY - $('.sc-project .magic-box').height()/2;

        console.log(x);
        console.log(y);

        gsap.to('.sc-project .magic-box img',{
          x:-x/9,
          y:-y/9
        })
      })

      $('.sc-project .touch').mousemove(function(e){
        x = e.offsetX - $('.sc-project .img-box.touch').width()/2;
        y = e.offsetY - $('.sc-project .img-box.touch').height()/2;

        console.log(x);
        console.log(y);

        gsap.to('.sc-project .img-box.touch',{
          x:-x/9,
          y:-y/9
        })
      })

      $('.sc-project .pad').mousemove(function(e){
        x = e.offsetX - $('.sc-project .img-box.pad').width()/2;
        y = e.offsetY - $('.sc-project .img-box.pad').height()/2;

        console.log(x);
        console.log(y);

        gsap.to('.sc-project .img-box.pad',{
          x:-x/9,
          y:-y/9
        })
      })

      /**
       * 
       * @connect
       * 
       * 
       */
        gsap.from(".sc-connect .left .img-box" ,{
          scrollTrigger: {
            trigger: ".sc-connect",
            toggleActions: "resume pause reset pause",
            // markers: true,
            scrub: 2,
            start: "0% 50%",
            end: "100% 50%"
          },
          x: -1000
        })
        gsap.to(".sc-connect .right .img-box" ,{
          scrollTrigger: {
            trigger: ".sc-connect",
            toggleActions: "resume pause reset pause",
            // markers: true,
            scrub: 2,
            start: "0% 50%",
            end: "100% 0%"
          },
          x: -1000
        })

        /**
         * 
         * @@@@
         * 
         */
          
      var imgSc = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-build .img-wrap",
          // markers: true,
          scrub: 2,
          start: "10% 60%",
          end: "30% 50%",
        }
      });
      imgSc
      .from(".sc-build .img.left" , {scale: 0, duration: 1 })
      .from(".sc-build .img.right", {scale: 0, duration: 1, delay: -0.5})
      .to(".sc-build .txt-box", {'opacity': 1, duration: 1, delay: 1})
      .to(".sc-conquer .bg", {'z-index': -1});

      const textList = document.querySelectorAll('.sc-build .move-box');
      textList.forEach(element => {
        xVal = element.dataset.x;
        
          var imgBox = gsap.timeline({
            scrollTrigger: {
              trigger: ".sc-build",
              // markers: true,
              scrub: 1,
              start: "40% 50%",
              end: "50% 50%"
            }
          });
          imgBox.to(element, {xPercent: xVal, duration: 1, delay: .5});
      });
      // var imgSc = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".sc-build",
      //     markers: true,
      //     scrub: 1,
      //     start: "40% 50%",
      //     end: "50% 50%"
      //   }
      // });
      // imgSc.to('.sc-build .move-box', {xPercent: xVal, duration: 1, delay: 0.5})

      /**
       * @conquer
       */
      var cqHd = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-conquer",
          toggleActions: "resume pause reset pause",
          // markers: true,
          scrub: 2,
          start: "0% 90%",
          end: "25% 90%"
        }
      })
      cqHd.addLabel('a')
      cqHd.from(".sc-conquer .row.left .headline", {y: -400, opacity : 0, '-webkit-text-fill-color' : "#fff", duration: 1},'a')
      cqHd.from(".sc-conquer .row.left .headline-sm", {y: -400, opacity : 0, duration: 1},'a')
      // cqHd.from(".sc-conquer .row.left .headline-sm", {y: -400, opacity : 0, delay: -0.9, duration: 1})
      cqHd.from(".sc-conquer .row.right .headline", {y: 100, opacity : 0, '-webkit-text-fill-color' : "#fff", delay: -0.9, duration: 2})
      cqHd.from(".sc-conquer .row.right .headline-sm", {y: 100, opacity : 0, delay: -2, duration: 2})
      


      var rowMv = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-conquer",
          toggleActions: "resume pause reset pause",
          // markers: true,
          scrub: 2,
          start: "0% 10%",
          end: "25% 90%"
        }
      })
      rowMv.to(".sc-conquer .row.left", {x: '-100%', duration: 1})
      rowMv.to(".sc-conquer .row.right", {x: '100%', delay: -0.9, duration: 1})
      

      var txtMv1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-conquer",
          // markers: true,
          scrub: 1,
          start: "15% 90%",
          end: "60% 0%"
        },
      })
      txtMv1.from(".sc-conquer .txt-box.left", {opacity: 0})
      txtMv1.to(".sc-conquer .txt-box.left", {opacity: 0})

      var txtMv2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-conquer .txt-box.right",
          // markers: true,
          scrub: 1,
          start: "0% 100%",
          end: "100% 0%"
        },
      })
      txtMv2.from(".sc-conquer .txt-box.right", {opacity: 0})
      txtMv2.to(".sc-conquer .txt-box.right", {opacity: 0})

      gsap.to(".sc-conquer .dimmed", {
        scrollTrigger: {
          trigger: ".sc-conquer",
          // markers: true,
          scrub: 1,
          start: "90% 100%",
          end: "100% 0%"

        },
        'background': 'rgba(250, 250, 250,1)'
      });


      /**
       * @promise
       */
      gsap.from(".group-promise", {
        scrollTrigger: {
          trigger: ".sc-promise",
          // markers: true,
          scrub: 2,
          start: "0% 70%",
          end: "0% 50%"
        },
        x: -200, duration: 1, opacity: 0, "z-index" : -100
      })   
      
      gsap.from(".sc-promise .headline", {
        scrollTrigger: {
          trigger: ".sc-promise",
          // markers: true,
          scrub: 1,
          start: "0% 70%",
          end: "0% 40%"
        },
        y: 300, opacity: 0, duration: 1
      })

      gsap.from(".cpu .mu .bar, .cpu .mx .bar, .cpu .mp .bar, .cpu .im .bar", {
        scrollTrigger: {
          trigger: ".sc-promise",
          // markers: true,
          scrub: 1,
          start: "20% 60%",
          end: "25% 50%"
        },
        "width": "0%"
      })

      gsap.from(".gpu .mu .bar, .gpu .mx .bar, .gpu .mp .bar, .gpu .im .bar", {
        scrollTrigger: {
          trigger: ".perfom-wrap.gpu",
          // markers: true,
          scrub: 1,
          start: "40% 50%",
          end: "42% 30%"
        },
        "width": "0%"
      })

      /**
       * @connection
       */
      gsap.from(".sc-connection img",{
        scrollTrigger: {
          trigger: ".sc-connection",
          // markers: true,
          scrub: 1,
          start: "20% 90%",
          end: "100% 70%"
        }, "scale" : 1.4,
      })
      gsap.from(".sc-connection .headline, .sc-connection .txt-box", {
        scrollTrigger: {
          trigger: ".sc-connection",
          // markers: true,
          scrub: 1,
          start: "20% 80%",
          end: "90% 50%",
        }, y: 200, duration: 1, opacity: 0
      })

      /**
       * @project
       */
      var pjHd = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-project",
          // markers: true,
          scrub: 1,
          start: "0% 90%",
          end: "10% 90%"
        }
      })
      pjHd.from(".sc-project .headline", {y: 400, opacity: 0, duration: 1})
      pjHd.from(".sc-project .headline-sm", {y: 300, delay: -0.9, opacity: 0, duration: 1})
    
  
    },
    // ???
    "all": function(){

      var mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sc-intro",
          scrub: 1,
          start: "0% 0%",
          end: "100% 50%",
          // markers:true,
        }
      });
      mainTl
      .addLabel('a')
      .to(".sc-intro .dimmed", {
        'background': 'rgba(17, 17, 17,1)'  
      },'a')
      .to(".sc-intro .intro-bg", {
        scale:1.5
      },'a')

    },
     
    
  })
  





 









  $('#form1').submit(function(){
    if($('#name').val() == ''){
      alert('이름을 입력해주세요.');
      $('#name').focus();
      return false;
    }else{
      alert('사전예약이 신청되었습니다.')
      return false;
    }
  })




})
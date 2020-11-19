    var Links = {
      SetColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
      }
    };

/*
여기서 부터 Link의 개념이 큼 *객체화시킨다-고함
처음 var Body에서 설명을 해두고
이 설명(정보)를 밑에서 끌어다 쓰는 것임
*/
    var Body = {
      SetColor:function (color){
        document.querySelector('body').style.color = color; 
      },
      SetBackgroundColor:function (color){
      document.querySelector('body').style.backgroundColor = color;
      }
    };
    function nightDayHandler(self){
      var target = document.querySelector('body');
      if(self.value === 'night'){
        Body.SetBackgroundColor('black'); 
        Body.SetColor('white'); 
        self.value = 'day';
        Links.SetColor('powderblue');
      } else { 
        Body.SetBackgroundColor('white'); 
        Body.SetColor('black'); 
        self.value = 'night';
        Links.SetColor('teal');
      }
    }
    //在BODY里创建DIV
    function addElementDiv(obj) {
        var parent = document.getElementsByTagName(obj)[0];
        //添加 div
        var div = document.createElement("div");
        //设置 div 属性，如 id
        div.setAttribute("id", "QPlayer");
        div.innerHTML = " <div id=\"pContent\">\n" +
            "    <div id=\"player\">\n" +
            "      <span class=\"cover\"></span>\n" +
            "      <div class=\"ctrl\">\n" +
            "        <div class=\"musicTag marquee\">\n" +
            "          <strong>歌名</strong>\n" +
            "          <span> - </span>\n" +
            "          <span class=\"artist\">歌手</span>\n" +
            "        </div>\n" +
            "        <div class=\"progress\">\n" +
            "          <div class=\"timer left\">0:00</div>\n" +
            "          <div class=\"contr\">\n" +
            "            <div class=\"rewind icon\"></div>\n" +
            "            <div class=\"playback icon\"></div>\n" +
            "            <div class=\"fastforward icon\"></div>\n" +
            "          </div>\n" +
            "          <div class=\"right\">\n" +
            "            <div class=\"liebiao icon\"></div>\n" +
            "          </div>\n" +
            "        </div>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "    <div class=\"ssBtn\">\n" +
            "      <div class=\"adf\"></div>\n" +
            "    </div>\n" +
            "  </div>\n" +
            "  <ol id=\"playlist\"></ol> ";
        parent.appendChild(div);
    }
	window.onload =   addElementDiv('body');   

    const heads = document.getElementsByTagName('head')[0];
    const bodys = document.getElementsByTagName('body')[0];
    const scriptmin = document.createElement('script');
    const scriptmarguee = document.createElement('script');
    const scripts = document.createElement('script');
    const links = document.createElement('link');
    links.href = 'https://player.cloolc.club/css/player.css';
	scriptmin.src = 'https://player.cloolc.club/js/jquery.min.2.2.1.js';
	scriptmarguee.src = 'https://player.cloolc.club/js/jquery.marquee.min.js';
	scripts.src = 'https://player.cloolc.club/js/player.js';
	links.setAttribute("rel", "stylesheet");
    heads.appendChild(links);
    bodys.appendChild(scriptmin);
    bodys.appendChild(scriptmarguee);
    bodys.appendChild(scripts);
	
    var	playlist = [
        {title:"野狼disco",artist:"宝石gem",mp3:"https://music.163.com/song/media/outer/url?id=1357785909.mp3",cover:"http://p2.music.126.net/Jp6P7fQA_1nD3YZ0m7tizA==/109951163989796642.jpg?param=186x186",},
        {title:"好喜欢你",artist:"推荐音乐",mp3:"https://music.163.com/song/media/outer/url?id=1381794108.mp3",cover:"http://p2.music.126.net/9ZCTtbguiCmW_FIr9B-jsA==/109951164269237713.jpg",},
        {title:"我爱他",artist:"推荐音乐",mp3:"https://music.163.com/song/media/outer/url?id=1382607014.mp3",cover:"http://p2.music.126.net/hjgI6MMM-1F0Ng3E77F33g==/109951164316140556.jpg",},
        {title:"明明",artist:"推荐音乐",mp3:"https://music.163.com/song/media/outer/url?id=1381761209.mp3",cover:"http://p2.music.126.net/AEqLLwzHzHBTQU5QobRA0w==/109951164260658166.jpg",},
        {title:"唱起这首歌",artist:"推荐音乐",mp3:"https://music.163.com/song/media/outer/url?id=1380326741.mp3",cover:"http://p2.music.126.net/CSUvrQlkDYSgZPgWF3tIFw==/109951164241638435.jpg",},
        {title:"不得不爱",artist:"推荐音乐",mp3:"https://music.163.com/song/media/outer/url?id=1384527426.mp3",cover:"http://p2.music.126.net/94ofbrM9sC9cQzKf2rO2GQ==/109951164297796644.jpg",},
    ];
    var isRotate = true;
    var autoplay = false;
	
    function bgChange(){
        var lis= $('.lib');
        for(var i=0; i<lis.length; i+=2)
            lis[i].style.background = 'rgba(246, 246, 246, 0.5)';
    }
    window.onload = bgChange;
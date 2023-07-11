var a;

function read() {
    if (a == 1) {
        Expand = document.getElementById("big");
        Expand.style.height = "auto";
        Open = document.getElementById("open");
        Open.style.backgroundColor = "blue";
        text = document.getElementById("txt");
        text.style.opacity = "1";
        text.style.padding = "10px 10px";
        Image_color = document.getElementById("img-clr");
        Image_color.style.background = "rgb(77, 77, 255)";
        Image_color.style.borderTopLeftRadius = "20px";
        Image_color.style.borderBottomRightRadius = "20px";

        Image_color.style.transform = "rotateY(180deg) translateY(-60px)";
        return a = 0;
    } else {
        Expand = document.getElementById("big");
        Expand.style.height = "280px";
        Open = document.getElementById("open");
        Open.style.backgroundColor = "rgb(231, 43, 153)";
        text = document.getElementById("txt");
        text.style.opacity = "0";
        Image_color = document.getElementById("img-clr");
        Image_color.style.backgroundColor = "rgb(250, 123, 187)";
        Image_color.style.transform = "rotateY(0) translateY(-20px)";

        return a = 1;

    }

}

function read1() {
    if (a == 1) {
        Expand = document.getElementById("big1");
        Expand.style.height = "auto";
        Open = document.getElementById("open1");
        Open.style.backgroundColor = "blue";
        text = document.getElementById("txt1");
        text.style.opacity = "1";
        text.style.padding = "10px 10px";
        Image_color = document.getElementById("img-clr1");
        Image_color.style.borderTopLeftRadius = "20px";
        Image_color.style.borderBottomRightRadius = "20px";
        Image_color.style.backgroundColor = "rgb(77, 77, 255)"
        Image_color.style.transform = "rotateY(180deg) translateY(-60px)";
        return a = 0;

    } else {
        Expand = document.getElementById("big1");
        Expand.style.height = "280px";
        Open = document.getElementById("open1");
        Open.style.backgroundColor = "rgb(231, 43, 153)";
        text = document.getElementById("txt1");
        text.style.opacity = "0";
        Image_color = document.getElementById("img-clr1");

        Image_color.style.backgroundColor = "rgb(250, 123, 187)";
        Image_color.style.transform = "rotateY(0) translateY(-20px)";
        return a = 1;

    }

}

function read2() {
    if (a == 1) {
        Expand = document.getElementById("big2");
        Expand.style.height = "auto";
        text = document.getElementById("txt2");
        Open = document.getElementById("open2");
        Open.style.backgroundColor = "blue";
        text.style.opacity = "1";
        text.style.padding = "10px 10px";
        Image_color = document.getElementById("img-clr2");
        Image_color.style.backgroundColor = "rgb(77, 77, 255)";
        Image_color.style.borderTopLeftRadius = "20px";
        Image_color.style.borderBottomRightRadius = "20px";
        Image_color.style.transform = "rotateY(180deg) translateY(-60px)";
        return a = 0;

    } else {
        Expand = document.getElementById("big2");
        Expand.style.height = "280px";
        Open = document.getElementById("open2");
        Open.style.backgroundColor = "rgb(231, 43, 153)";
        text = document.getElementById("txt2");
        text.style.opacity = "0";
        Image_color = document.getElementById("img-clr2");
        Image_color.style.backgroundColor = "rgb(250, 123, 187)";
        Image_color.style.transform = "rotateY(0) translateY(-20px)";
        return a = 1;

    }

}
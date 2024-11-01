document.addEventListener("DOMContentLoaded", function () {
    // 监听整个文档的 click 事件
    document.addEventListener("click", function (event) {
        // 创建一个小球元素
        var ball = document.createElement("div");
        ball.className = "click-ball";
        ball.style.position = "absolute";
        ball.style.left = event.clientX + "px";
        ball.style.top = event.clientY + "px";
        ball.style.width = "20px";
        ball.style.height = "20px";
        ball.style.backgroundColor = getRandomColor();  // 生成随机颜色
        ball.style.borderRadius = "50%";
        ball.style.pointerEvents = "none";  // 确保小球不会阻碍其他点击事件
        ball.style.zIndex = 1000;  // 设置较高的 z-index，确保小球在最上层
        ball.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";

        // 将小球添加到文档中
        document.body.appendChild(ball);

        // 设置小球的动画效果
        setTimeout(function () {
            ball.style.transform = "scale(3)";
            ball.style.opacity = "0";
        }, 50);

        // 一段时间后移除小球
        setTimeout(function () {
            ball.remove();
        }, 500);
    });

    // 随机生成颜色的函数
    function getRandomColor() {
        var colors = ["#FF6B6B", "#FF9A8B", "#FFD93D", "#6BCB77", "#4D96FF"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});

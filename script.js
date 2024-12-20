const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // 랜덤 위치와 크기 설정
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 7}s`; // 7-10초
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = `${Math.random() * 10 + 5}px`;

    document.body.appendChild(snowflake);

    // 일정 시간 후 눈 삭제
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
};

// 일정 간격으로 눈 생성
setInterval(createSnowflake, 200);

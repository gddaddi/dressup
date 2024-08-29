// Canvas와 Context 설정
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 기본 캐릭터 이미지 생성 및 로드
const baseCharacter = new Image();
baseCharacter.src = 'character_base.png';

// 옷 이미지 객체 생성 및 로드
const clothes = {
    shirt: new Image(),
    shirt_02: new Image(),
    shirt_03: new Image(),
    pants: new Image()
};

clothes.shirt.src = 'shirt.png';
clothes.shirt_02.src = 'shirt_02.png';
clothes.shirt_03.src = 'shirt_03.png';
clothes.pants.src = 'pants.png';

// 기본 캐릭터 이미지 로드 후 그림 그리기
baseCharacter.onload = function() {
    ctx.drawImage(baseCharacter, 0, 0, canvas.width, canvas.height);
};

// 옷 이미지 클릭 이벤트 설정
document.querySelectorAll('.clothing').forEach(item => {
    item.addEventListener('click', event => {
        const clothingType = event.target.id;
        ctx.drawImage(clothes[clothingType], 100, 50);
    });
});

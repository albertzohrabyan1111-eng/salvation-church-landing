# ✝️ Salvation Church Landing

> 🌐 **Languages:** [English](#-english) · [Русский](#-русский) · [Հայերեն](#-հայերեն)

---

## 🇬🇧 English

### 📖 About
**Salvation Church Landing** is a modern, responsive one-page website template for a church or Christian community. It is built with pure **HTML, CSS and vanilla JavaScript**, with no frameworks and no build step. ⛪

### ✨ Features
- ⏳ **Loading screen**: a blurred overlay with animated dots that disappears after 2 seconds.
- 🖼️ **Hero slider**: 2 slides with auto-play (every 10 s), left/right arrows, clickable dots and smooth fade transitions.
- 📱 **Responsive design**: breakpoints at 1200 / 992 / 768 / 576 px, plus a hamburger menu built with a CSS-only checkbox trick.
- 🎬 **Scroll animations**: blocks slide up and fade in when they enter the viewport.
- 🔢 **Animated counters**: Members, Pastors, Donation and Churches count up when the stats block becomes visible, and reset when you scroll away.
- 🎨 **Hover effects**: buttons, social icons, menu items, gallery overlays and blog cards.
- 🧩 **Sections**: Hero, Worship/Connect/God's Love, About, Stats, Sermons, Testimonials, Blog, Events, Gallery and Footer.

### 📂 Project structure
```
📦 Salvation-Church-Landing
 ┣ 📄 index.html          # Page markup
 ┣ 📁 CSS
 ┃ ┣ 🎨 load.css          # Loader styles
 ┃ ┣ 🎨 style.css         # Main styles and CSS variables
 ┃ ┣ 🎨 hover.css         # Hover effects
 ┃ ┣ 🎨 anim.css          # Keyframe animations
 ┃ ┗ 🎨 min-media.css     # Media queries and mobile menu
 ┣ 📁 JavaScript
 ┃ ┣ ⚙️ script.js         # Hero content sizing
 ┃ ┣ ⚙️ slider.js         # Slider, arrows, dots, autoplay
 ┃ ┣ ⚙️ scrol-anim.js     # Scroll-triggered animations
 ┃ ┣ ⚙️ shotchik.js       # Number counters
 ┃ ┗ ⚙️ loading.js        # Removes the loader
 ┣ 📁 img                 # Photos (backgrounds, sermons, events, gallery)
 ┗ 📁 icons               # Section icons
```

### 🧠 How the code works
1. 🔄 `loading.js` removes all `.lo` elements after 2 seconds and re-enables page scrolling.
2. 🎞️ `slider.js` collects the `.slider` elements, creates the dots, and toggles the `.active` class. CSS handles the fade via `opacity` transitions.
3. 📏 `script.js` calculates the hero height minus the top panel so the slide content stays centered.
4. 👀 `scrol-anim.js` checks each `.anim-cl` block on scroll. When it is near the viewport it adds `.box-anim`, and when it leaves it removes the class so the animation can replay. It also triggers the stats animation and counters.
5. 🔢 `shotchik.js` increments each counter from 0 to its target value with `setInterval`.

### 🚀 Getting started
1. 📥 Download or clone the project.
2. 🖱️ Open `index.html` in your browser. No installation needed.
3. ✏️ Replace the placeholder text, images and links with your own.

### 🛠️ Tech stack
`HTML5` · `CSS3` · `JavaScript (ES5)` · `Font Awesome` · `Google Fonts (Open Sans, Roboto, Archivo Black)`

### 📝 Notes
- The `href=""` links and the lorem-style texts are placeholders. 🔗
- The `img/` and `icons/` folders must contain the files referenced in the code. 🖼️

---

## 🇷🇺 Русский

### 📖 О проекте
**Salvation Church Landing** — это современный адаптивный одностраничный шаблон сайта для церкви или христианской общины. Написан на чистых **HTML, CSS и JavaScript**, без фреймворков и сборщиков. ⛪

### ✨ Возможности
- ⏳ **Экран загрузки**: размытый фон с анимированными точками, исчезает через 2 секунды.
- 🖼️ **Слайдер на главном экране**: 2 слайда, автопрокрутка (каждые 10 с), стрелки влево/вправо, кликабельные точки и плавная смена затуханием.
- 📱 **Адаптивность**: брейкпоинты 1200 / 992 / 768 / 576 px и бургер-меню на чистом CSS (через checkbox).
- 🎬 **Анимации при прокрутке**: блоки плавно выезжают снизу и появляются.
- 🔢 **Анимированные счётчики**: «Members», «Pastors», «Donation», «Churches» считают от 0 до нужного значения при появлении блока и сбрасываются при уходе.
- 🎨 **Эффекты наведения**: кнопки, соцсети, пункты меню, оверлей галереи и карточки блога.
- 🧩 **Секции**: главный экран, Worship/Connect/God's Love, О нас, статистика, проповеди, отзывы, блог, события, галерея и подвал.

### 📂 Структура проекта
```
📦 Salvation-Church-Landing
 ┣ 📄 index.html          # Разметка страницы
 ┣ 📁 CSS
 ┃ ┣ 🎨 load.css          # Стили загрузчика
 ┃ ┣ 🎨 style.css         # Основные стили и CSS-переменные
 ┃ ┣ 🎨 hover.css         # Эффекты наведения
 ┃ ┣ 🎨 anim.css          # Keyframe-анимации
 ┃ ┗ 🎨 min-media.css     # Медиазапросы и мобильное меню
 ┣ 📁 JavaScript
 ┃ ┣ ⚙️ script.js         # Расчёт размеров контента слайдера
 ┃ ┣ ⚙️ slider.js         # Слайдер, стрелки, точки, автопрокрутка
 ┃ ┣ ⚙️ scrol-anim.js     # Анимации при прокрутке
 ┃ ┣ ⚙️ shotchik.js       # Счётчики чисел
 ┃ ┗ ⚙️ loading.js        # Удаление загрузчика
 ┣ 📁 img                 # Фото (фоны, проповеди, события, галерея)
 ┗ 📁 icons               # Иконки секций
```

### 🧠 Как работает код
1. 🔄 `loading.js` через 2 секунды удаляет все элементы `.lo` и возвращает прокрутку страницы.
2. 🎞️ `slider.js` собирает элементы `.slider`, создаёт точки и переключает класс `.active`. Плавность обеспечивает CSS (`opacity`).
3. 📏 `script.js` считает высоту главного экрана за вычетом верхней панели, чтобы контент слайда оставался по центру.
4. 👀 `scrol-anim.js` при прокрутке проверяет каждый блок `.anim-cl`: при приближении к экрану добавляет `.box-anim`, при уходе убирает, чтобы анимация проигрывалась снова. Также запускает анимацию статистики и счётчики.
5. 🔢 `shotchik.js` через `setInterval` увеличивает каждое число от 0 до целевого значения.

### 🚀 Быстрый старт
1. 📥 Скачайте или клонируйте проект.
2. 🖱️ Откройте `index.html` в браузере. Установка не нужна.
3. ✏️ Замените тексты-заглушки, картинки и ссылки на свои.

### 🛠️ Технологии
`HTML5` · `CSS3` · `JavaScript (ES5)` · `Font Awesome` · `Google Fonts (Open Sans, Roboto, Archivo Black)`

### 📝 Примечания
- Ссылки `href=""` и тексты в стиле lorem ipsum — заглушки. 🔗
- В папках `img/` и `icons/` должны лежать файлы, указанные в коде. 🖼️

---

## 🇦🇲 Հայերեն

### 📖 Նախագծի մասին
**Salvation Church Landing**-ը եկեղեցու կամ քրիստոնեական համայնքի համար նախատեսված ժամանակակից, հարմարվողական մեկ էջանոց կայքի ձևանմուշ է։ Այն գրված է մաքուր **HTML, CSS և JavaScript**-ով՝ առանց ֆրեյմվորքերի և հավաքման գործիքների։ ⛪

### ✨ Հնարավորություններ
- ⏳ **Բեռնման էկրան**՝ աղոտ ֆոն շարժվող կետերով, որը անհետանում է 2 վայրկյանից։
- 🖼️ **Գլխավոր սլայդեր**՝ 2 սլայդ, ավտոմատ փոխարկում (ամեն 10 վրկ), ձախ/աջ սլաքներ, սեղմվող կետեր և սահուն անցում։
- 📱 **Հարմարվողականություն**՝ 1200 / 992 / 768 / 576 px բեկման կետեր և բուրգեր-մենյու՝ կառուցված միայն CSS-ով (checkbox-ի միջոցով)։
- 🎬 **Անիմացիաներ ոլորելիս**՝ բլոկները սահուն բարձրանում և երևում են էկրանին մոտենալիս։
- 🔢 **Անիմացիոն հաշվիչներ**՝ «Members», «Pastors», «Donation», «Churches» թվերը 0-ից հաշվում են մինչև թիրախային արժեքը, երբ բլոկը երևում է, և զրոյանում են հեռանալիս։
- 🎨 **Սավառնման (hover) էֆեկտներ**՝ կոճակներ, սոցցանցեր, մենյուի կետեր, պատկերասրահի ծածկույթ և բլոգի քարտեր։
- 🧩 **Բաժիններ**՝ գլխավոր էկրան, Worship/Connect/God's Love, Մեր մասին, վիճակագրություն, քարոզներ, վկայություններ, բլոգ, իրադարձություններ, պատկերասրահ և ստորին հատված (footer)։

### 📂 Նախագծի կառուցվածքը
```
📦 Salvation-Church-Landing
 ┣ 📄 index.html          # Էջի նշագրումը
 ┣ 📁 CSS
 ┃ ┣ 🎨 load.css          # Բեռնիչի ոճեր
 ┃ ┣ 🎨 style.css         # Հիմնական ոճեր և CSS փոփոխականներ
 ┃ ┣ 🎨 hover.css         # Hover էֆեկտներ
 ┃ ┣ 🎨 anim.css          # Keyframe անիմացիաներ
 ┃ ┗ 🎨 min-media.css     # Media query-ներ և բջջային մենյու
 ┣ 📁 JavaScript
 ┃ ┣ ⚙️ script.js         # Սլայդերի բովանդակության չափերի հաշվարկ
 ┃ ┣ ⚙️ slider.js         # Սլայդեր, սլաքներ, կետեր, ավտոփոխարկում
 ┃ ┣ ⚙️ scrol-anim.js     # Ոլորման անիմացիաներ
 ┃ ┣ ⚙️ shotchik.js       # Թվային հաշվիչներ
 ┃ ┗ ⚙️ loading.js        # Բեռնիչի հեռացում
 ┣ 📁 img                 # Նկարներ (ֆոներ, քարոզներ, իրադարձություններ, պատկերասրահ)
 ┗ 📁 icons               # Բաժինների պատկերակներ
```

### 🧠 Ինչպես է աշխատում կոդը
1. 🔄 `loading.js`-ը 2 վայրկյանից հեռացնում է բոլոր `.lo` տարրերը և վերադարձնում էջի ոլորումը։
2. 🎞️ `slider.js`-ը հավաքում է `.slider` տարրերը, ստեղծում կետերը և փոխում `.active` դասը։ Սահուն անցումը ապահովում է CSS-ը (`opacity`)։
3. 📏 `script.js`-ը հաշվում է գլխավոր էկրանի բարձրությունը՝ հանած վերևի վահանակը, որպեսզի սլայդի բովանդակությունը մնա կենտրոնում։
4. 👀 `scrol-anim.js`-ը ոլորելիս ստուգում է յուրաքանչյուր `.anim-cl` բլոկ. էկրանին մոտենալիս ավելացնում է `.box-anim`, հեռանալիս՝ հեռացնում, որպեսզի անիմացիան կրկնվի։ Նաև գործարկում է վիճակագրության անիմացիան և հաշվիչները։
5. 🔢 `shotchik.js`-ը `setInterval`-ով ավելացնում է յուրաքանչյուր թիվը 0-ից մինչև թիրախային արժեքը։

### 🚀 Արագ մեկնարկ
1. 📥 Ներբեռնեք կամ clone արեք նախագիծը։
2. 🖱️ Բացեք `index.html`-ը զննարկիչում։ Տեղադրում պետք չէ։
3. ✏️ Փոխարինեք փոխարինող տեքստերը, նկարները և հղումները ձերով։

### 🛠️ Տեխնոլոգիաներ
`HTML5` · `CSS3` · `JavaScript (ES5)` · `Font Awesome` · `Google Fonts (Open Sans, Roboto, Archivo Black)`

### 📝 Նշումներ
- `href=""` հղումները և lorem ipsum ոճի տեքստերը ժամանակավոր են։ 🔗
- `img/` և `icons/` պանակներում պետք է լինեն կոդում նշված ֆայլերը։ 🖼️

---

<p align="center">Made with ❤️ and ✝️ · Salvation Church Landing</p>
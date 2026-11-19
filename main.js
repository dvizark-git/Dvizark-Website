const items = document.querySelectorAll('.gallery-item');
const subFilterBar = document.getElementById('concept-subfilters');

function filterMain(category, btnElement) {
    const mainButtons = document.querySelectorAll('.filter-buttons .filter-btn');
    mainButtons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    if (category === 'concept') {
        subFilterBar.classList.add('active');
        const subButtons = subFilterBar.querySelectorAll('.filter-btn');
        subButtons.forEach(btn => btn.classList.remove('active'));
        subButtons[0].classList.add('active');
    } else {
        subFilterBar.classList.remove('active');
    }

    items.forEach(item => {
        const itemCategories = item.getAttribute('data-category');
        if (category === 'all' || itemCategories.includes(category)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

function filterSub(subCategory, btnElement) {
    const subButtons = subFilterBar.querySelectorAll('.filter-btn');
    subButtons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    items.forEach(item => {
        const itemCategories = item.getAttribute('data-category');
        if (itemCategories.includes(subCategory)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}
window.addEventListener('load', e => {
    var active = true;    
    var sidebar_backup = document.querySelector('#nav-drawer').cloneNode(true);
    fixAllTheBullshit();

    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
        if (msg.hasOwnProperty('request')) {
            sendResponse({active: active});
        } else {
            if (msg.active) {
                active = msg.active;
                fixAllTheBullshit();
            } else {
                active = msg.active;
                document.querySelector('#nav-drawer').replaceWith(sidebar_backup.cloneNode(true));
            }
        }
    });
});

function fixAllTheBullshit() {
    var sidebar = document.querySelector('#nav-drawer');
    var courseLabels = document.querySelectorAll('.media-body');
    var firstList = document.querySelectorAll('nav.list-group')[0];
    var secondList = document.querySelectorAll('nav.list-group')[1];

    sidebar.style.height = 'calc(100% - 150px)';
    courseLabels.forEach(item => {
        switch (item.innerHTML) {
            case '4002185-6017301201': item.innerHTML = 'کارگاه کامپیوتر'; break;
            case '4002185-6017646721': item.innerHTML = 'آزمایشگاه مدارهای منطقی و معماری کامپیوتر'; break;
            case '4002185-6019202633': item.innerHTML = 'اصول طراحی کامپایلر'; break;
            case '4002185-6019229955': item.innerHTML = 'سیستم‌های عامل'; break;
            case '4002185-6019244151': item.innerHTML = 'آزمایشگاه سیستم‌های عامل'; break;
            case '4002185-6030731572': item.innerHTML = 'طراحی شیءگرای سیستم‌ها'; break;
            case '4002185-6030911754': item.innerHTML = 'هوش مصنوعی و سیستم‌های خبره'; break;
            case '4002185-6030979460': item.innerHTML = 'آزمایشگاه اصول طراحی کامپایلر'; break;
            case '4002185-6032909705': item.innerHTML = 'دانش خانواده و جمعیت'; break;
            case '4002185-6040578448': item.innerHTML = 'تاریخ فرهنگ و تمدن اسلام و ایران'; break;
        }
    });

    firstList.children[0].children[0].remove();
    firstList.children[0].children[1].remove();
    firstList.children[0].children[1].remove();
    while (firstList.children[0].children.length > 2)
        firstList.children[0].children[2].remove();

    for (let i = 0; i < 4; i++)
        secondList.children[0].children[0].remove();

    secondList.children[0].insertBefore(document.createElement('li'), secondList.children[0].children[10]);
    secondList.children[0].children[10].innerHTML = `
    <a class="list-group-item list-group-item-action" href="https://vadana23.iauec.ac.ir/course/view.php?id=3725" data-key="3072" data-isexpandable="1" data-indent="1" data-showdivider="0" data-type="20" data-nodetype="1" data-collapse="0" data-forceopen="0" data-isactive="0" data-hidden="0" data-preceedwithhr="0" data-parent-key="mycourses">
        <div class="ml-1">
            <div class="media">
                <span class="media-left">
                    <i class="icon fa fa-graduation-cap fa-fw " aria-hidden="true"></i>
                </span>
                <span class="media-body ">انس با قرآن کریم</span>
            </div>
        </div>
    </a>`;
}
const notice = document.getElementById('notice');
const works = document.getElementById('profile-4');

const onLoad = async () => {
    const notice_data = await fetch('notice.json').then(resp => resp.json());
    for (let i = 0; i <= 4; i++) {
        const div = document.createElement('div');

        const date  = document.createElement('div');
        date.className = "date";
        date.innerHTML = notice_data[i].date;

        const news = document.createElement('div');
        news.className = "news";
        news.innerHTML = notice_data[i].news;

        div.appendChild(date);
        div.appendChild(news);
        notice.appendChild(div);
    };

    const work_data = await fetch('works.json').then(resp => resp.json());
    for (let i in work_data) {
        if (work_data[i].type === "category") {
            const category = document.createElement('div');
            category.className = "category";
            category.innerHTML = work_data[i].category;

            works.appendChild(category);
        };

        if (work_data[i].type === "work") {
            const has_link  = !!work_data[i].link;

            const work = document.createElement('div');
            work.className = "work";

            if (has_link) {
                const link = document.createElement('a');
                link.href   = work_data[i].link;
                link.target = "_blank";
                link.rel    = "noopener noreferrer";

                work.appendChild(link);
            };

            const divA = document.createElement('div');
                const image = document.createElement('img');
                image.src = `image/${has_link ? work_data[i].name : 'WIP'}.png`;
            divA.appendChild(image);

            const divB = document.createElement('div');
            divB.className = `${has_link ? '' : 'wip'}`;
                const name = document.createElement('div');
                name.className = "name";
                name.innerHTML = work_data[i].name;
                const explanation = document.createElement('div');
                explanation.className = "explanation";
                explanation.innerHTML = work_data[i].explanation;
            divB.appendChild(name);
            divB.appendChild(explanation);

            work.appendChild(divA);
            work.appendChild(divB);
            works.appendChild(work);
        };
    };
};

window.onload = onLoad;

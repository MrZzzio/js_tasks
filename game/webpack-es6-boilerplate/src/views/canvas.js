const cnvs = document.getElementById('main-field');
const ctx = cnvs.getContext('2d');

    function clear() {
        // console.log(ctx);

        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    }

    function render(objects) {
        for (let i = 0; i < objects.length; i++) {
            // console.log(objects[i]);
            objects[i].render();
        }
    }

export default function canvas() {
    return {
        clear: clear,
        render: render,
        cnvs,
        ctx
    };
}

//накасячил тут
const cnvs = document.getElementById('main-field');
const ctx = cnvs.getContext('2d');

    function clear() {
        console.log(ctx);

        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
    }

export default function canvas() {
    return {
        clear: clear(),
        cnvs,
        ctx
    };
}

//накасячил тут
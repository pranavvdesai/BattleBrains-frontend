<template>
    <div class="my-auto">
        <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size-9" viewBox="0 0 24 15">
            <path id="iconmonstr-behance-1"
                d="M22,7H15V5h7Zm1.726,10c-.442,1.3-2.029,3-5.1,3s-5.564-1.729-5.564-5.675c0-3.91,2.325-5.92,5.466-5.92A5.018,5.018,0,0,1,23.9,12.831,13.39,13.39,0,0,1,24,14.971H15.97A2.694,2.694,0,0,0,20.558,17h3.168ZM16.04,13h4.965a2.235,2.235,0,0,0-2.477-2.219A2.291,2.291,0,0,0,16.04,13ZM6.466,19.988H0V5.021H6.953c5.476.081,5.58,5.444,2.72,6.906C13.134,13.187,13.25,19.988,6.466,19.988ZM3,11H6.584c2.508,0,2.906-3-.312-3H3v3Zm3.391,3H3v3.016H6.341C9.4,17.016,9.209,14,6.391,14Z"
                transform="translate(0 -5)" :fill="color" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "behanceIcon",
    props: {
        color: String,
        size: Number,
    },
};
</script>

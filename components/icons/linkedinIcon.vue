<template>
    <div class="my-auto">
        <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size-1" viewBox="0 0 24 23">
            <path id="iconmonstr-linkedin-1"
                d="M4.98,3.5A2.48,2.48,0,1,1,2.5,1,2.49,2.49,0,0,1,4.98,3.5ZM5,8H0V24H5Zm7.982,0H8.014V24h4.969V15.6c0-4.67,6.029-5.052,6.029,0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8Z"
                transform="translate(0 -1)" :fill="color" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "linkedinIcon",
    props: {
        color: String,
        size: Number,
    },
};
</script>

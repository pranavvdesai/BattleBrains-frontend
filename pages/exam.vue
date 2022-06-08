<template>
  <body class="bg-dark-100">
    <section class="font-josefin">
      <ExamScreenSidebar :questionsArray="questionsArray" />
      <div class="lg:flex lg:justify-end">
        <!-- Navbar Responsve -->
        <div class="lg:hidden bg-dark-200 px-6">
          <div class="flex justify-between py-6">
            <div class="flex items-center">
              <LeftArrowIcon class="mr-2" :size="16" :color="'#fff'" />
              <p class="text-base font-bold text-white font-mont ml-4">
                Why Web3?
              </p>
            </div>
            <div class="flex items-center">
              <div @click="toggleSidebar">
                <BoldPaperIcon :size="16" :color="'#B8B8CC'" />
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2 -->
        <div class="flex flex-col xs:w-[100%] lg:w-[80%] lg:mt-6 lg:px-8">
          <!-- Navbar -->
          <div class="ml-6 hidden lg:block">
            <div class="text-white font-bold text-2xl">
              📘 It's your moment to excel
            </div>
            <div class="text-dark-500">Calm down, you got this!</div>
          </div>

          <div v-for='data in questionsArray' :key='data.qNo'>
            <ExamQuestionCard :qNo="data.qNo" :isAttempted="data.isAttempted" :question="data.question"
              :optionsArray="data.optionsArray" :answer="data.answer" />
          </div>

          <!-- rightsidebar -->
          <ExamRightSidebar @toggle="toggleSidebar" :class="position" :questionsArray="questionsArray" />
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import ExamScreenSidebar from "../components/examScreenSidebar.vue";
import LeftArrowIcon from "../components/icons/leftArrowIcon.vue";
import ExamRightSidebar from "../components/examRightSidebar.vue";
import BoldPaperIcon from "../components/icons/boldPaperIcon.vue";
import ExamQuestionCard from "../components/examQuestionCard.vue";
export default {
  data() {
    return {
      questionsArray: [
        {
          qNo: 1,
          isAttempted: true,
          question: "What is the meaning of life?",
          optionsArray: [
            {
              option: 'Harshal Dave',
              val: 1
            },
            {
              option: 'Pranav Desai',
              val: 2
            }
          ],
          answer: null,
        },
        {
          qNo: 2,
          isAttempted: false,
          question: "How old are you?",
          optionsArray: [
            {
              option: 'Harshal Dave',
              val: 1
            },
            {
              option: 'Pranav Desai',
              val: 2
            }
          ],
          answer: null,
        },
      ],
      position: "-right-full",
    };
  },
  methods: {
    toggleSidebar() {
      this.position =
        this.position === "-right-full" ? "right-0" : "-right-full";
    },
  },
  components: {
    ExamScreenSidebar,
    LeftArrowIcon,
    ExamRightSidebar,
    BoldPaperIcon,
    ExamQuestionCard,
  },
};
</script>

<template>
  <body class="bg-dark-100">
    <section class="font-josefin">
      <NotificationScreenSidebar :supportArray="supportArray" />
      <div class="lg:flex lg:justify-end">
        <!-- Navbar Responsve -->
        <div class="lg:hidden bg-dark-200 px-6">
          <div class="flex justify-between py-6">
            <div class="flex items-center">
              <LeftArrowIcon class="mr-2" :size="16" :color="'#fff'" />
              <p class="text-base font-bold text-white font-mont ml-4">
                🔔 Notifications
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
        <div
          class="flex flex-col xs:w-[100%] lg:w-[80%] lg:mt-6 lg:px-8 xs:px-2"
        >
          <!-- Navbar -->
          <div class="ml-6 hidden lg:block mt-6">
            <div class="text-white font-bold text-2xl">🔔 Notifications</div>
            <div class="text-dark-500">
              one-stop place to stay up-to-date with the Web3 ecosystem
            </div>
          </div>

          <!-- notifications -->
          <div class="notifications mt-12 ml-6">
            <div class="notif">
              <p class="text-sm font-josefin text-dark-500 mb-4">Today</p>
              <Notifications
                v-for="data in dataArray"
                v-if="data.date == 'today'"
                :key="data.title"
                :title="data.title"
                :time="data.time"
                :description="data.description"
              />
            </div>
            <div class="notif w-full">
              <p class="text-sm font-josefin text-dark-500 mb-4">Yesterday</p>
              <Notifications
                v-for="data in dataArray"
                v-if="data.date == 'yesterday'"
                :key="data.title"
                :title="data.title"
                :time="data.time"
                :description="data.description"
              />
            </div>
          </div>
        </div>
        <!-- rightsidebar -->
        <NotificationRightSidebar
          @toggle="toggleSidebar"
          :class="position"
          :supportArray="supportArray"
        />
      </div>
    </section>
  </body>
</template>

<script>
import NotificationScreenSidebar from "../components/NotificationScreenSidebar.vue";
import LeftArrowIcon from "../components/icons/leftArrowIcon.vue";
import NotificationRightSidebar from "../components/NotificationRightSidebar.vue";
import Notifications from "../components/Notifications.vue";
import BoldPaperIcon from "../components/icons/boldPaperIcon.vue";
export default {
  data() {
    return {
      dataArray: [
        {
          title: "Notification Title",
          time: "1 hr ago",
          date: "today",
          description: "New level has been unlocked! Notification details",
        },
        {
          title: "Notification Title",
          time: "1 hr ago",
          date: "today",
          description: "New level has been unlocked! Notification details",
        },
        {
          title: "Notification Title",
          time: "1 day ago",
          date: "yesterday",
          description: "New level has been unlocked! Notification details",
        },
        {
          title: "Notification Title",
          time: "1 day ago",
          date: "yesterday",
          description: "New level has been unlocked! Notification details",
        },
      ],
      supportArray: [
        {
          id: "1108",
          title: "Support request Title",
          desc: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
          open: true,
        },
        {
          id: "1108",
          title: "Support request Title",
          desc: "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet",
          open: false,
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
    NotificationScreenSidebar,
    BoldPaperIcon,
    LeftArrowIcon,
    NotificationRightSidebar,
    Notifications,
  },
};
</script>

<template>
<q-scroll-area class="full-width full-height">
  <q-list bordered separator>
    <q-item v-for="m in members" :key="m.id">
      <div class="flex items-center">
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
          {{user?.id === m.id ? 'Your status is' : 'This user has currently status'}}
          <b
            :class="`text-${userStatusEnum[user?.id === m.id ? userStatus : statuses[m.username]]?.color}`"
          >
            {{userStatusEnum[user?.id === m.id ? userStatus : statuses[m.username]].name}}
          </b>
        </q-tooltip>
        <q-badge :color="userStatusEnum[user?.id === m.id ? userStatus : statuses[m.username]]?.color" rounded class="q-mr-sm" />
        {{user?.id === m.id ? 'You' : m.username}} &nbsp; <b>{{channel?.admin === m.id ? '(Admin)' : ''}}</b>
      </div>
      <q-space />
      <q-btn
        v-if="isKickable(m.id)"
        round
        size="sm"
        icon="clear"
        @click="() => onKickMember(m.username)"
      >
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          {{user?.id === channel?.admin ? 'Kick user' : 'Vote for kick'}}
        </q-tooltip>
      </q-btn>
    </q-item>
  </q-list>
</q-scroll-area>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapGetters } from 'vuex';
import userStatusEnum from 'src/constants/userStatus.enum';
import { Account } from 'src/store/account/state';

export default defineComponent({
  props: {
    members: {
      type: Array as PropType<Account[]>,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({
      user: 'account/user', userStatus: 'account/userStatus', activeChannel: 'channels/activeChannel', channel: 'channels/channel', statuses: 'channels/membersStatus'
    }),
    userStatusEnum() {
      return userStatusEnum;
    }
  },
  watch: {
    members() {
      if (!this.members.some((member) => member.id === this.user.id)) {
        void this.$store.dispatch('channels/leave', this.activeChannel);
        // void this.$store.commit('account/removeChannel', this.activeChannel);
      }
    }
  },
  methods: {
    onKickMember(username:string) {
      return this.$store.dispatch('channels/handleRemoval', { channel: this.activeChannel, kickUser: username });
    },
    isKickable(id: string) {
      if (this.user.id === id || this.channel.admin === id)
        return false;

      if (this.channel.isPrivate && this.channel.admin !== this.user.id)
        return false;

      return true;
    }
  }
});
</script>

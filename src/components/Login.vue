<template>
    <v-layout column align-center>
        <v-card class="grey lighten-4 elevation-0 login-card">
            <v-card-text>
                <form id="main" v-cloak v-on:submit.prevent="onLogin">
                    <v-container fluid>
                        <!-- Email -->
                        <v-layout row>
                            <v-text-field
                              name="email"
                              v-model.trim="form.email"
                              :label="$t('login.email')"
                              prepend-icon="email"
                              single-line
                              autofocus
                            ></v-text-field>
                        </v-layout>

                        <!-- Password -->
                        <v-layout row>
                            <v-text-field
                                name="password"
                                :type="showPassword ? 'text' : 'password'"
                                v-model.trim="form.password"
                                :label="$t('login.password')"
                                prepend-icon="lock"
                                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                                :append-icon-cb="() => (showPassword = !showPassword)"
                                single-line
                            ></v-text-field>
                        </v-layout>

                        <v-divider></v-divider>

                        <!-- Controls -->
                        <v-card-row actions>
                            <v-btn flat>{{ $t('login.forgotPassword') }}</v-btn>

                            <v-spacer></v-spacer>

                            <v-btn
                                type="submit"
                                :loading="isLoggingIn"
                                @click.native="onLogin"
                                :disabled="isLoginDisabled">
                                {{ $t('login.login') }}
                            </v-btn>
                        </v-card-row>

                    </v-container>
                </form>
            </v-card-text>
        </v-card>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Login',
    data () {
        return {
            isLoggingIn:  false,
            showPassword: false,
            form:         {
                email:    '',
                password: ''
            }
        }
    },
    computed: {
        isLoginDisabled() {
            if (this.isLoggingIn) return true
            return (this.form.email === '' || this.form.password === '')
        }
    },
    methods: {
        ...mapActions(['apiLogin']),
        async onLogin() {
            // For hitting "enter" to submit form or otherwise circumventing the login button
            if (this.isLoginDisabled) { return }
            this.isLoggingIn = true

            const result = await this.apiLogin({ email: this.form.email, password: this.form.password })
            this.isLoggingIn = false
            if (!result.success) {
                // TODO: notify
                return
            }
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.login-card {
    width: 100%;
    min-width: 400px;
    max-width: 600px;
}
</style>

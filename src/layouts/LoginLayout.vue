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

        <v-dialog lazy v-model="loginDialogVisible">
            <v-card>
                <v-card-row>
                    <v-card-title>{{ $t('login.dialogTitle') }}</v-card-title>
                </v-card-row>
                <v-card-row>
                    <v-card-text>{{ $t('login.dialogAuthMessage') }}</v-card-text>
                </v-card-row>
                <v-card-row actions>
                    <v-btn class="white--text" flat @click.native="onLoginDialogOk">{{ $t('login.dialogOk') }}</v-btn>
                </v-card-row>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Login',
    data () {
        return {
            isLoggingIn:        false,
            showPassword:       false,
            loginDialogVisible: false,
            form:               {
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

            try {
                await this.apiLogin({ email: this.form.email, password: this.form.password })
                this.$router.push('/')
            } catch (e) {
                // Check for error type and notify (ie. auth error vs network error)
                this.loginDialogVisible = true
                this.$nextTick(() => console.warn(e))   // Trying to smooth out transition, probably not needed here
            }
            this.isLoggingIn = false
        },
        onLoginDialogOk() {
            this.loginDialogVisible = false
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

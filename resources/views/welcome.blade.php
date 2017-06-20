@extends('layouts.app')

@section('content')
    <div class="flex-center position-ref full-height">
        <div id="app">
            <section class="row">
                <div class="small-6 columns">
                    <h1 class="text-center">YOU</h1>
                    <div class="healthbar">
                        <div
                                class="healthbar text-center"
                                style="background-color: green; margin: 0; color: white;"
                                :style="{width: playerHealth + '%'}">
                            @{{ playerHealth }}
                        </div>
                    </div>
                </div>
                <div class="small-6 columns">
                    <h1 class="text-center">MONSTER</h1>
                    <div class="healthbar">
                        <div
                                class="healthbar text-center"
                                style="background-color: green; margin: 0; color: white;"
                                :style="{width: monsterHealth + '%'}">
                            @{{ monsterHealth }}
                        </div>
                    </div>
                </div>
            </section>
            <section class="row controls" v-if="!gameIsRunning">
                <div class="small-12 columns">
                    <button id="start-game" @click="startGame">START NEW GAME</button>
                </div>
            </section>
            <section class="row controls" v-else>
                <div class="small-12 columns">
                    <button id="attack" @click="attack">ATTACK</button>
                    <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
                    <button id="heal" @click="heal">HEAL</button>
                    <button id="give-up" @click="giveUp">GIVE UP</button>
                </div>
            </section>
            <section class="row log" v-if="turns.length > 0">
                <div class="small-12 columns">
                    <ul>
                        <li
                                v-for="turn in turns"
                                :key="turn"
                                :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}"
                        >
                            @{{turn.text}}
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
@endsection


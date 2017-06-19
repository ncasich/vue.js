@extends('layouts.app')

@section('content')
    <div class="flex-center position-ref full-height">
        <div class="content" id="app">
            <input type="text" @input="changeTitle">
            <p>@{{title}}</p>
            <a :href="link">google</a>
            <br><br><br><br><br>

            <button @click="counter++">increase</button>
            <button @click="counter--">decrease</button>
            <button @click="secondCounter++">increase second</button>
            <p>Counter: @{{counter}} | @{{secondCounter}}</p>
            <p>Result: @{{result()}} | @{{output}}</p>
            <p></p>
            <br><br><br><br><br>
            <div class="demo" @click="attachRed = !attachRed" :class="divClasses"></div>
            <div class="demo" :class="divClasses"></div>
            <div class="demo" :class="[color,{red:attachRed}]"></div>
        <hr>
        <input type="text" v-model="color">
        </div>
    </div>


@endsection


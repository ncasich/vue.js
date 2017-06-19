@extends('layouts.app')

@section('content')
    <div class="flex-center position-ref full-height">
        <div class="content" id="app">
            <p v-if="show">You can see me!</p>
            <p v-else>Now you see me!</p>

            <template v-if="show">
                <h1>This is header</h1>
                <p>Inside a template</p>
            </template>

            <p v-show="show">Can you also see me?</p>
            <button @click="show = !show">Show</button>

            <ul>
                <li v-for="(ingridient, i) in ingridients" :key="ingridient">@{{ingridient}} (@{{i}})</li>
            </ul>


            <hr>
            <ul>
                <li v-for="(person, jindex) in persons">
                    <div v-for="(value, key, index) in person"> [@{{ jindex }}][@{{ index }}]. @{{ key }}: @{{ value }}</div>
                </li>
            </ul>
            <hr>
                <span v-for="n in 10">@{{n}}</span>
            <hr>
            <button @click="ingridients.push('spices')">Add Spices</button>
            <template v-for="(ingridient, i) in ingridients">
                <h1>@{{ingridient}}</h1>
                <p>(@{{i}})</p>
            </template>
        </div>
    </div>
@endsection


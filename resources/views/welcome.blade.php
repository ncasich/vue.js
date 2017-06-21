@extends('layouts.app')

@section('content')
    <div class="flex-center position-ref full-height" id="content">

        <div id="app1">
            <h1>@{{title}}</h1>
            <button @click="show">Show paragraph</button>
            <button @click="destroy">Destroy</button>
            <p v-if="showParagraph">This is not always visible 1</p>

        </div>

        <div id="app2">
            <h1>@{{title}}</h1>
            <button @click="onChange">Change thomthing in vm1</button>
            <p v-if="showParagraph">This is not always visible 2</p>

        </div>
    </div>
@endsection


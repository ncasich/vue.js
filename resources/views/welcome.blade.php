@extends('layouts.app')

@section('content')
    <div class="flex-center position-ref full-height">
        <div class="content" id="app">
            <input type="text" v-on:input="changeTitle">
            <p>@{{title}}</p>
        </div>
    </div>
@endsection


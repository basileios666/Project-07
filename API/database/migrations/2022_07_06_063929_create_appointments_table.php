<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->dateTime('time')->unique();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('phonenumber')->nullable();
            $table->string('age');
            $table->string('message')->nullable();
            $table->string('allergy1')->nullable();
            $table->string('allergy2')->nullable();
            $table->string('allergy3')->nullable();
            $table->string('services')->nullable();
            $table->foreignId('user_id')
           ->constrained('users')
           ->onUpdate('cascade')
           ->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
};

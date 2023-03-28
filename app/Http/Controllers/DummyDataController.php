<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DummyDataController extends Controller
{
    public function fetchAllDropdownData() {
        $uom = [
            [ "id" => 1, "name" => "SHP" ],
            [ "id" => 2, "name" => "CRD" ],
            [ "id" => 3, "name" => "CM" ],
        ];

        $currency = [
            [ "id" => 1, "name" => "USD" ],
            [ "id" => 2, "name" => "AED" ],
        ];

        $charge_to = [
            [ "id" => 1, "name" => "A" ],
            [ "id" => 2, "name" => "B" ],
            [ "id" => 3, "name" => "C" ],
        ];

        $data['uom'] = $uom;
        $data['currency'] = $currency;
        $data['charge_to'] = $charge_to;

        return response([
            'data' => $data,
            'message' => 'Success fetch all dropdown data !',
        ], 200);
    }
}

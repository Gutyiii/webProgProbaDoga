<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Szakdoga;

class SzakdogaController extends Controller
{
    public function index()
    {
        $szakdoga = Szakdoga::all();
        return response()->json($szakdoga);
    }

    public function store(Request $request)
    {
        $szakdoga = new Szakdoga();
        $szakdoga->szakdoga_nev = $request->szakdoga_nev;
        $szakdoga->githublink = $request->githublink;
        $szakdoga->oldallink = $request->oldallink;
        $szakdoga->tagokneve = $request->tagokneve;
        $szakdoga->save();
    }
    public function update(Request $request, $szakdogaId)
    {
        $szakdoga=Szakdoga::find($szakdogaId);
        $szakdoga->szakdoga_nev = $request->szakdoga_nev;
        $szakdoga->githublink = $request->githublink;
        $szakdoga->oldallink = $request->oldallink;
        $szakdoga->tagokneve = $request->tagokneve;
        $szakdoga->save();
    }

    public function destroy($szakdogaId)
    {
        $szakdoga=Szakdoga::find($szakdogaId);
        $szakdoga->delete();
    }
}

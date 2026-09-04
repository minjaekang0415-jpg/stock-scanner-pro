import {scan} from '../../../lib/scanner';
export const dynamic='force-dynamic';
export async function GET(){try{return Response.json(await scan(),{headers:{'Cache-Control':'no-store'}})}catch(e){return Response.json({error:e.message},{status:500})}}

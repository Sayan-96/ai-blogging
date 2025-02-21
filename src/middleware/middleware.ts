import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';

import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const session = await getSession({ req: req as any });
  if (!session) {
    return NextResponse.redirect('/auth/signin');
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/protected'],
};

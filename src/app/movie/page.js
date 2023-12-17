import Link from 'next/link';
import React from 'react';


const page = () => {
    return (
        <div>
            <h1>Movie Page</h1>
          <Link href="/movie/abcd">
            Go to
          </Link>
        </div>
    );
};

export default page;
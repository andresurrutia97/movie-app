import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import ViewsContent from '../components/Ui/ViewsContent';
import ViewsTitle from '../components/Ui/ViewsTitle';
import Separator from '../components/Ui/Separator';
import Button from '../components/Ui/Button';

const TOC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const loginButton = !isAuthenticated ? (
    <Button onClick={() => loginWithRedirect()}>LOGIN</Button>
  ) : (
    ''
  );

  return (
    <ViewsContent>
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
        <ViewsTitle>TOC & Privacy Policy </ViewsTitle>
        <div className="w-6/12 my-5 md:w-1/4 md:mt-8">{loginButton}</div>
      </div>

      <Separator />
      <div className="mb-5 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna
        tellus, tincidunt sit amet vestibulum sed, semper sed leo. Integer eget
        est augue. Sed consectetur tempor maximus. Praesent sapien nisl, aliquet
        eget aliquam sed, convallis auctor ex. Nulla tristique quis mi quis
        iaculis. In facilisis purus a tempor sollicitudin. Duis eu ipsum et
        ipsum rutrum dapibus vitae quis ex. Donec id nisi eget nulla facilisis
        sodales. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Aenean condimentum justo quis risus
        posuere, non laoreet ante iaculis. Etiam lobortis ullamcorper tristique.
        Vivamus suscipit turpis quis nunc tincidunt, eget placerat nibh aliquam.
        Vivamus sodales at purus sed euismod. Sed a feugiat orci. Integer ligula
        libero, facilisis in erat quis, pellentesque bibendum massa. In
        vestibulum ante in eleifend varius. Ut id erat sit amet nunc imperdiet
        venenatis ut ut lorem. Duis dictum viverra diam sit amet eleifend.
        Mauris lacus nulla, maximus ac placerat sit amet, viverra non nulla. Ut
        malesuada magna ut enim bibendum maximus. Etiam ac elementum nibh, sit
        amet molestie tortor. Vestibulum quis iaculis leo. Donec ante elit,
        tristique congue erat et, porta finibus lacus. Pellentesque vestibulum
        id eros non fermentum. Nulla id hendrerit ex. Nullam fringilla mauris ut
        ligula scelerisque luctus. Ut rhoncus sed tortor a vulputate. Vestibulum
        vel odio at elit posuere commodo porta eget tortor. Vestibulum eget
        lectus nunc. Sed venenatis viverra ligula at vestibulum. Sed nulla
        metus, efficitur in nisi ac, efficitur sodales massa.
      </div>
      <Separator />
    </ViewsContent>
  );
};

export default TOC;

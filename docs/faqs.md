---
title: Frequently Asked Questions
description: Frequently Asked Questions about Cabbage
---


<details>
  <summary>Who created this and why?</summary>
  <p>Cabbage is the work of a very small team of musicians and composers, each with a unique and equally questionable skill-set. The goal is to provide users with the tools to expand closed source commercial DAWS with their own audio plugins, thus promoting new levels of expression and freedom for the musician/producer.</p>
  <p>Open source developers have constantly struggled with the ethos of closed source projects; composers and musicians shouldn't have to. We believe Cabbage serves as a good example of how these disparate cultures can be brought a little bit closer, and how open source audio software can live side by side and compete with the best the music industry can throw at it.</p>
  <p><strong>Head of Cabbage:</strong> Rory Walsh</p>
  <p><strong>Sound Designer:</strong> Iain McCurdy</p>
  <p><strong>Web Developer:</strong> Gordon Boyle</p>
  <p>Special thanks to Øyvind Brandtsegg, Giorgio Zucco, Dave Phillips, Damien Rennick, fallTx, Andy Filebrown, Keven Walsh, Micah Frank, Victor Lazzarini, Steven Yi, Iain McCurdy, Rafael Gomez and everyone on the Csound, Cabbage, and iPlug2 mailing lists.</p>
</details>

<details>
  <summary>I'm a fool with money and want to buy a round of beers for the people responsible for this wonderful project!</summary>
  <p>No problem! You can donate to the project using the link below.</p>
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" width="150" height="40" name="submit" alt="Donate with PayPal" />
</form>

</details>
<details>
  <summary>Can I sell plugins I created with Cabbage?</summary>
  <p>Yes. You are free to distribute and sell your Cabbage instruments. You can sell, without restriction, anything you create with Cabbage.</p>
  <p>If you wish to release commercial products that prevent end users from accessing your Csound code, please contact Rory Walsh via the <a href="https://forum.cabbageaudio.com">Cabbage Forum</a> for more details.</p>
</details>

<details>
  <summary>Can I use the examples that ship with Cabbage in my own work?</summary>
  <p>The examples that ship with Cabbage are licensed under the Creative Commons - Attribution-NonCommercial-ShareAlike 4.0 International license. This means that you may use them for non-commercial work as long as you credit the author, Iain McCurdy, and share your modified code. You are not permitted to use them in any commercial plugins. More details of the license can be found <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode">here</a>.</p>
</details>

<details>
  <summary>Do I need to know how to program in the Csound language to use Cabbage?</summary>
  <p>No. Cabbage ships with lots of instruments that you can use 'out of the box'. If, however, you wish to develop your own instruments you will need to learn the Csound language. Tutorials are provided in the 'Learning' section of this site.</p>
</details>

<details>
  <summary>Why Csound?</summary>
  <p>Csound is one of the oldest and most extensive audio programming languages in the world. It is still being actively developed by a team of dedicated programmers and has a huge user base. Csound has over 20 years worth of examples to play with and maintains backwards compatibility, meaning you can still render music written in the 80's with the latest version.</p>
  <p>Csound can run on iOS, Android, Raspberry PIs, Eurorack modules, commercial synthesizers, and a host of games engines. Its low-level C code makes it extremely fast, which is why Csound was chosen as the implementation language for Cabbage.</p>
</details>

<details>
  <summary>Where can I learn more about Csound?</summary>
  <p>The learning section of this site features a brief introduction to Csound, along with several video tutorials. You can also visit the <a href="http://csound.github.io/">Csound Website</a> where you'll find extensive resources, articles, and the reference manual with over 1500 code examples.</p>
</details>

<details>
  <summary>I would like to distribute my instruments, do end-users need to have a Csound library installed?</summary>
  <p>Cabbage instruments depend on the Csound library. To avoid requiring end-users to pre-install Csound, you can distribute the Csound library with your instruments. The best way to do this is to create an installer that installs both Csound and your Cabbage files. There are several package builders for both OSX and Windows to create these installers.</p>
</details>

<details>
  <summary>Why can't I export as RTAS or AAX?</summary>
  <p>Quite simple, I don't have a version of Protools. Testing and developing plugins for a DAW I don't own is rather futile.</p>
</details>

<details>
  <summary>Where can I find the source code?</summary>
  <p>The source is available on <a href="https://github.com/rorywalsh/cabbage"><i class="icon icon-github-circled"></i> Github</a>. Note that you will also need to acquire a copy of the <a href="http://www.steinberg.net/en/company/developers.html"><i class="icon icon-vst"></i> VST SDK</a> from Steinberg.</p>
</details>

<details>
  <summary>I would love to use Cabbage for a project but it's lacking certain GUI widgets that I need. What can I do?</summary>
  <p>You can request that we develop the widget for you. If it is useful to the entire Cabbage community, we would be happy to add it. If it is a specialized widget for a one-off project, we may need some convincing. We are not above monetary bribes!</p>
</details>

<details>
  <summary>I prefer to work with another audio programming language, can Cabbage be used to provide an interface to that instead?</summary>
  <p>Cabbage makes use of the iPlug2 plugin framework, which allows developers to design their own audio plugins or apps, but the use of Csound is pretty deeply integrated. However, with a little time and effort it should be possible to open the system up to use other languages.</p>
</details>

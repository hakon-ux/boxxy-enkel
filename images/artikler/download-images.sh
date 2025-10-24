#!/bin/bash

# Script for å laste ned artikkelbilder fra rcontainer.frdm.no
# Kjør dette scriptet fra mappen images/artikler/

echo "Laster ned artikkelbilder fra rcontainer.frdm.no..."

# Last ned bildene
curl -o stabling-tips.jpg "https://rcontainer.frdm.no/wp-content/uploads/2018/12/12-tips-til-effektiv-stabling-av-flyttegods-i-container.png"
curl -o dimensjoner.jpg "https://rcontainer.frdm.no/wp-content/uploads/2018/12/kondens-6.png"
curl -o markeringer.jpg "https://rcontainer.frdm.no/wp-content/uploads/2018/09/fra-finn-20.jpg"
curl -o kondens.jpg "https://rcontainer.frdm.no/wp-content/uploads/2018/12/kondens-i-containere-et-vanlig-problem.png"
curl -o intermodal.jpg "https://rcontainer.frdm.no/wp-content/uploads/2018/12/chuttersnap-255215-unsplash-compressor.jpg"

echo ""
echo "Ferdig! Alle bilder er lastet ned."
echo ""
echo "Liste over filer:"
ls -lh *.jpg *.png 2>/dev/null || echo "Ingen bilder funnet"

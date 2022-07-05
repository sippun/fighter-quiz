#!/bin/bash

s=('EMTJ' 'EMTS' 'EMRJ' 'EMRS' 'EPTJ' 'EPTS' 'EPRJ' 'EPRS' 'IMTJ' 'IMTS' 'IMRJ' 'IMRS' 'IPTJ' 'IPTS' 'IPRJ' 'IPRS')
for n in ${s[@]};
do
  touch $n.js
done
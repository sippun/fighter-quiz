#!/bin/bash

types=('EMTJ' 'EMTS' 'EMRJ' 'EMRS' 'EPTJ' 'EPTS' 'EPRJ' 'EPRS' 'IMTJ' 'IMTS' 'IMRJ' 'IMRS' 'IPTJ' 'IPTS' 'IPRJ' 'IPRS')
for type in ${types[@]};
do
  touch $type.js
done
<template>
  <section class="mapping_data">
    <hr>
    <button class="btn btn-warning" @click="reduce()"> Reduce Data </button>
    <div class="row">
      <div class="col">
        <span> <strong>Before : </strong> </span>
        <pre class="text-left" id="json">
        {{dataOriSiswa}}
        </pre>
        <br>
      </div>
      <div class="col">
        <span> <strong>After :</strong> </span>

        <pre class="text-left" id="json">
            {{dataAfter}}
        </pre>
      </div>
    </div>

  </section>
</template>
<script>
  import {
    dataSiswa
  } from '../Data_Resource/dataMurid'

  export default {
    data() {
      return {
        dataBefore: '',
        containArray: [],
        dataAfter: '',
        limit: 0,
      }
    },

    computed: {
      dataOriSiswa() {
        return this.dataBefore = JSON.stringify(dataSiswa, undefined, 2);
      }
    },
    methods: {
      reduce() {
         this.limit++;
        if (this.limit < 2) {
          this.iteration(dataSiswa)
        } else {
          return false
        }
      },

      iteration(item) {
        item.forEach((Element) => {
          delete Element.no_telp;
          delete Element.tanggal_lahir;
          this.containArray.push(Element)
          this.dataAfter = JSON.stringify(this.containArray, undefined, 2);
        })
      }
    }

  }

</script>

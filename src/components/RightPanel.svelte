<script>
  import { gridState } from '$lib/stores/gridState';
  import { get } from 'svelte/store';

  const MAX_BUTTON_VALUE = 12;

  // 値→表示テキストのマッピング
  const LABELS = [
    '-',            // 0
    'チェア↑',      // 1
    'チェア→',      // 2
    'チェア↓',      // 3
    'チェア←',      // 4
    'テーブル↑',    // 5
    'テーブル→',    // 6
    'テーブル↓',    // 7
    'テーブル←',    // 8
    'クローゼット↑', // 9
    'クローゼット→', // 10
    'クローゼット↓', // 11
    'クローゼット←'  // 12
  ];

  // ボタンをクリックしたときに更新
  function handleClick(index) {
    gridState.update((arr) => {
      const next = [...arr];
      next[index] = next[index] >= MAX_BUTTON_VALUE ? 0 : next[index] + 1;
      return next;
    });
  }

  // gridState を購読
  let localGrid = [];
  $: localGrid = $gridState;
</script>

<div>
  <table class="grid-table">
    <tbody>
      {#each Array(8) as _, row}
        <tr>
          {#each Array(8) as _, col}
            <td>
              <button
                class="grid-btn"
                on:click={() => handleClick(row * 8 + col)}
              >
                {LABELS[localGrid[row * 8 + col]]}
              </button>
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .grid-table {
    border-collapse: collapse;
  }

  td {
    padding: 0;
    border: none;
  }

  .grid-btn {
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    text-align: center;
    line-height: 1.1;
    font-size: 12px;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans JP", sans-serif;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .grid-btn:hover {
    background-color: #e9e9e9;
  }
</style>
